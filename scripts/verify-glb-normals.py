#!/usr/bin/env python3
"""Fail the Pages build when a GLB mesh primitive has no vertex normals."""

from __future__ import annotations

import json
import struct
import sys
from pathlib import Path


JSON_CHUNK = 0x4E4F534A


def read_glb_json(path: Path) -> dict:
    with path.open("rb") as source:
        header = source.read(12)
        if len(header) != 12:
            raise RuntimeError("truncated GLB header")

        magic, version, total_length = struct.unpack("<4sII", header)
        if magic != b"glTF" or version != 2:
            raise RuntimeError("expected a glTF 2.0 binary")
        if total_length != path.stat().st_size:
            raise RuntimeError("GLB length field does not match file size")

        chunk_length, chunk_type = struct.unpack("<II", source.read(8))
        if chunk_type != JSON_CHUNK:
            raise RuntimeError("first GLB chunk is not JSON")

        return json.loads(source.read(chunk_length).decode("utf-8").rstrip("\x00 \t\r\n"))


def verify_normals(path: Path) -> int:
    document = read_glb_json(path)
    primitive_count = 0

    for mesh in document.get("meshes", []):
        for primitive in mesh.get("primitives", []):
            if primitive.get("mode", 4) != 4:
                continue
            primitive_count += 1
            attributes = primitive.get("attributes", {})
            if "POSITION" not in attributes or "NORMAL" not in attributes:
                raise RuntimeError("triangle primitive is missing POSITION or NORMAL")

            accessors = document.get("accessors", [])
            positions = accessors[attributes["POSITION"]]
            normals = accessors[attributes["NORMAL"]]
            if positions.get("count") != normals.get("count"):
                raise RuntimeError("normal count does not match vertex count")

    if primitive_count == 0:
        raise RuntimeError("no triangle mesh primitives found")
    return primitive_count


def main() -> None:
    if len(sys.argv) < 2:
        raise SystemExit("Usage: verify-glb-normals.py MODEL.glb [MODEL.glb ...]")

    verified = 0
    for raw_path in sys.argv[1:]:
        path = Path(raw_path)
        try:
            primitive_count = verify_normals(path)
        except (IndexError, KeyError, OSError, ValueError, RuntimeError, struct.error) as error:
            raise SystemExit(f"{path}: normal verification failed: {error}") from error
        print(f"{path.name}: {primitive_count} mesh primitives include vertex normals")
        verified += 1

    print(f"Verified smooth-normal data in {verified} GLB models.")


if __name__ == "__main__":
    main()
