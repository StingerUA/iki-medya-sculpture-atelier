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
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Scan_the_World_-_The_Thinker_(Auguste_Rodin).stl" \
  "$MODEL_TMP_DIR/the-thinker.stl"
download \
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Scan_the_World_-_Laocoon_Group.stl" \
  "$MODEL_TMP_DIR/laocoon-group.stl"
download \
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Venus_med_apple_(SMK_KMS6004,_Scan_the_World).stl" \
  "$MODEL_TMP_DIR/venus-with-the-apple.stl"
download \
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/3D_Model_Column_Krater.stl" \
  "$MODEL_TMP_DIR/greek-column-krater.stl"
download \
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/3D_Model_Neck_Amphora.stl" \
  "$MODEL_TMP_DIR/greek-neck-amphora.stl"
download \
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/3D_Model_Hydria.stl" \
  "$MODEL_TMP_DIR/greek-hydria.stl"
download \
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/3D_Model_Loutrophoros.stl" \
  "$MODEL_TMP_DIR/greek-loutrophoros.stl"
download \
  "https://files.printables.com/media/prints/4f6d4b94-fa96-4907-ba44-ddeb9516ad68/stls/10940742_a124d34b-578c-4f7f-a663-a37a8d4df865_41bef1fd-807b-4b87-894f-f750187ead26/ataturk_bust_gm.stl" \
  "$MODEL_TMP_DIR/mustafa-kemal-ataturk-bust.stl"
download \
  "https://files.printables.com/media/prints/ccbe3c2d-d8fc-4eb7-92d3-946816498ff0/stls/9374316_dac262c3-eb87-4e88-89c7-7e9735bd8b83_f31fc121-783b-45c0-ba1e-33bc1a0199a3/final.obj" \
  "$MODEL_TMP_DIR/silent-dialogue.obj"
download \
  "https://files.printables.com/media/prints/f169c6c7-f1ec-4753-81f4-053246dce947/stls/10141689_9fe99250-4904-43c4-835e-4371c05be4bb_af138c7d-53ed-46f7-bb55-1d07613b2e7e/fox.stl" \
  "$MODEL_TMP_DIR/contour-fox.stl"
download \
  "https://files.printables.com/media/prints/1138685/stls/8592089_497698cf-ce33-4592-a6d2-4d4e4e4c107f_4b0c31de-cbb0-485a-abcc-fa0a89472af5/organicsculpt_tiwst.stl" \
  "$MODEL_TMP_DIR/ribbon-twist.stl"
download \
  "https://files.printables.com/media/prints/1136905/stls/8579178_8082b821-af77-4376-9b45-8af126d76112_c9aada4d-de0f-4c3f-a4fa-b336f0eacfc9/organicsculpt.stl" \
  "$MODEL_TMP_DIR/organic-monolith.stl"
download \
  "https://files.printables.com/media/prints/485566/stls/3965204_e528087a-0a22-48c1-af6c-36109a2dbdf2/organic-levitation.stl" \
  "$MODEL_TMP_DIR/levitation-line.stl"

python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/venus-de-milo.obj" "$MODEL_DIR/venus-de-milo.glb" 32000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/the-thinker.stl" "$MODEL_DIR/the-thinker.glb" 120000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/laocoon-group.stl" "$MODEL_DIR/laocoon-group.glb" 300000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/venus-with-the-apple.stl" "$MODEL_DIR/venus-with-the-apple.glb" 300000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/greek-column-krater.stl" "$MODEL_DIR/greek-column-krater.glb" 100000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/greek-neck-amphora.stl" "$MODEL_DIR/greek-neck-amphora.glb" 100000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/greek-hydria.stl" "$MODEL_DIR/greek-hydria.glb" 100000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/greek-loutrophoros.stl" "$MODEL_DIR/greek-loutrophoros.glb" 100000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/mustafa-kemal-ataturk-bust.stl" "$MODEL_DIR/mustafa-kemal-ataturk-bust.glb" 450000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/silent-dialogue.obj" "$MODEL_DIR/silent-dialogue.glb" 300000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/contour-fox.stl" "$MODEL_DIR/contour-fox.glb" 250000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/ribbon-twist.stl" "$MODEL_DIR/ribbon-twist.glb" 160000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/organic-monolith.stl" "$MODEL_DIR/organic-monolith.glb" 280000
python3 scripts/convert-sculpture.py \
  "$MODEL_TMP_DIR/levitation-line.stl" "$MODEL_DIR/levitation-line.glb" 120000

# Web-optimised CC0 decorative assets from Poly Haven. These GLBs are pinned to
# the commit that converted the original 1K glTF releases into self-contained files.
POLY_GLBS="https://raw.githubusercontent.com/lsgmasa33/modoki-postfx-demo/88e73f2d0cc05bd1564d7615c3d23aea6f1dc68d/runtime/assets/models"
download "$POLY_GLBS/gothic_statue.glb" "$MODEL_DIR/gothic-guardian.glb"

# Poly Haven Horse Head: a contemporary bronze-look decorative sculpture for
# hospitality interiors, distributed under CC0. Pack the official 1K glTF
# bundle as one AR-ready GLB.
HORSE_TMP="$MODEL_TMP_DIR/horse-head"
mkdir -p "$HORSE_TMP/textures"
HORSE_BASE="https://dl.polyhaven.org/file/ph-assets/Models"
download "$HORSE_BASE/gltf/1k/horse_head/horse_head_1k.gltf" "$HORSE_TMP/horse_head_1k.gltf"
download "$HORSE_BASE/gltf/8k/horse_head/horse_head.bin" "$HORSE_TMP/horse_head.bin"
download "$HORSE_BASE/jpg/1k/horse_head/horse_head_diff_1k.jpg" "$HORSE_TMP/textures/horse_head_diff_1k.jpg"
download "$HORSE_BASE/jpg/1k/horse_head/horse_head_nor_gl_1k.jpg" "$HORSE_TMP/textures/horse_head_nor_gl_1k.jpg"
download "$HORSE_BASE/jpg/1k/horse_head/horse_head_arm_1k.jpg" "$HORSE_TMP/textures/horse_head_arm_1k.jpg"
pack_to_glb "$HORSE_TMP/horse_head_1k.gltf" "$MODEL_DIR/bronze-horse-head.glb"

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

python3 scripts/verify-glb-normals.py "$MODEL_DIR"/*.glb

echo "Prepared $(find "$MODEL_DIR" -maxdepth 1 -name '*.glb' | wc -l) AR-ready GLB models."
du -h "$MODEL_DIR"/*.glb
