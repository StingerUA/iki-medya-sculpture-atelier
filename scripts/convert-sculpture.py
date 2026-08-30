#!/usr/bin/env python3
"""Convert a printable OBJ/STL sculpture into a web-ready GLB."""

from __future__ import annotations

import sys
from pathlib import Path

import trimesh


def main() -> None:
    if len(sys.argv) not in (3, 4):
        raise SystemExit("Usage: convert-sculpture.py INPUT OUTPUT [TARGET_FACES]")

    input_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2])
    target_faces = int(sys.argv[3]) if len(sys.argv) == 4 else None

    loaded = trimesh.load(input_path, force="mesh", process=True)
    if isinstance(loaded, trimesh.Scene):
        mesh = trimesh.util.concatenate(tuple(loaded.geometry.values()))
    else:
        mesh = loaded

    if not isinstance(mesh, trimesh.Trimesh) or mesh.is_empty:
        raise RuntimeError(f"No mesh geometry found in {input_path}")

    mesh.remove_unreferenced_vertices()
    mesh.fix_normals(multibody=False)
    original_faces = len(mesh.faces)

    if target_faces and original_faces > target_faces:
        mesh = mesh.simplify_quadric_decimation(face_count=target_faces)
        mesh.remove_unreferenced_vertices()
        mesh.fix_normals(multibody=False)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    mesh.export(output_path, file_type="glb")

    size_mb = output_path.stat().st_size / (1024 * 1024)
    print(
        f"{input_path.name}: {original_faces:,} → {len(mesh.faces):,} faces, "
        f"{size_mb:.2f} MB"
    )


if __name__ == "__main__":
    main()
