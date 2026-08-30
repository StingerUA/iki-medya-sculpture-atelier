#!/usr/bin/env bash
set -euo pipefail

MODEL_DIR="public/models"
MODEL_TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$MODEL_TMP_DIR"' EXIT

mkdir -p "$MODEL_DIR"

download() {
  curl --fail --location --retry 3 --retry-delay 2 --silent --show-error "$1" --output "$2"
}

pack_to_glb() {
  local input="$1"
  local output="$2"

  assimp export "$input" "$output" -fglb2
  test -s "$output"
}

# Ancient classics and modern museum works. The source pages and licences are
# linked on every product page in the storefront.
download \
  "https://raw.githubusercontent.com/edent/PirateMuseum/master/obj/venus32k.obj" \
  "$MODEL_TMP_DIR/venus-de-milo.obj"
download \
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ubekendt,_Apollon_Belvedere,_,_KAS353,_Statens_Museum_for_Kunst,_3D_model.stl" \
  "$MODEL_TMP_DIR/apollo-belvedere.stl"
download \
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Scan_the_World_-_The_Thinker_(Auguste_Rodin).stl" \
  "$MODEL_TMP_DIR/the-thinker.stl"
download \
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Age_Of_Bronze_(Auguste_Rodin).stl" \
  "$MODEL_TMP_DIR/age-of-bronze.stl"

python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/venus-de-milo.obj" "$MODEL_DIR/venus-de-milo.glb" 32000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/apollo-belvedere.stl" "$MODEL_DIR/apollo-belvedere.glb" 100000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/the-thinker.stl" "$MODEL_DIR/the-thinker.glb" 120000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/age-of-bronze.stl" "$MODEL_DIR/age-of-bronze.glb" 140000

# Web-optimised CC0 decorative assets from Poly Haven. These GLBs are pinned to
# the commit that converted the original 1K glTF releases into self-contained files.
POLY_GLBS="https://raw.githubusercontent.com/lsgmasa33/modoki-postfx-demo/88e73f2d0cc05bd1564d7615c3d23aea6f1dc68d/runtime/assets/models"
download "$POLY_GLBS/gothic_statue.glb" "$MODEL_DIR/gothic-guardian.glb"
download "$POLY_GLBS/antique_ceramic_vase_01.glb" "$MODEL_DIR/antique-ceramic-vase.glb"

# Poly Haven Marble Bust 01: fetch the official 1K glTF bundle and pack it as a
# single GLB so Android Scene Viewer can open it reliably.
MARBLE_TMP="$MODEL_TMP_DIR/marble-bust"
mkdir -p "$MARBLE_TMP/textures"
MARBLE_BASE="https://dl.polyhaven.org/file/ph-assets/Models"
download "$MARBLE_BASE/gltf/1k/marble_bust_01/marble_bust_01_1k.gltf" "$MARBLE_TMP/marble_bust_01_1k.gltf"
download "$MARBLE_BASE/gltf/8k/marble_bust_01/marble_bust_01.bin" "$MARBLE_TMP/marble_bust_01.bin"
download "$MARBLE_BASE/jpg/1k/marble_bust_01/marble_bust_01_diff_1k.jpg" "$MARBLE_TMP/textures/marble_bust_01_diff_1k.jpg"
download "$MARBLE_BASE/jpg/1k/marble_bust_01/marble_bust_01_nor_gl_1k.jpg" "$MARBLE_TMP/textures/marble_bust_01_nor_gl_1k.jpg"
download "$MARBLE_BASE/jpg/1k/marble_bust_01/marble_bust_01_rough_1k.jpg" "$MARBLE_TMP/textures/marble_bust_01_rough_1k.jpg"
pack_to_glb "$MARBLE_TMP/marble_bust_01_1k.gltf" "$MODEL_DIR/marble-bust.glb"

echo "Prepared $(find "$MODEL_DIR" -maxdepth 1 -name '*.glb' | wc -l) AR-ready GLB models."
du -h "$MODEL_DIR"/*.glb
