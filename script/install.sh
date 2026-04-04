#!/usr/bin/env bash
set -euo pipefail

REPO="AndreRaz/openstudy"
INSTALL_DIR="${OPENSTUDY_INSTALL_DIR:-${XDG_BIN_DIR:-$HOME/.local/bin}}"
TMP_DIR="$(mktemp -d)"
NPM_AVAILABLE=0

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

need() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "Error: falta '$1' en el sistema." >&2
    exit 1
  }
}

has() {
  command -v "$1" >/dev/null 2>&1
}

need curl
need uname

OS="$(uname -s)"
ARCH="$(uname -m)"

case "$OS" in
  Linux) platform="linux" ;;
  Darwin) platform="darwin" ;;
  *) echo "Sistema no soportado: $OS" >&2; exit 1 ;;
esac

case "$ARCH" in
  x86_64|amd64) arch="x64"; engram_arch="amd64" ;;
  arm64|aarch64) arch="arm64"; engram_arch="arm64" ;;
  *) echo "Arquitectura no soportada: $ARCH" >&2; exit 1 ;;
esac

if [ "$platform" = "linux" ]; then
  asset="openstudy-${platform}-${arch}.tar.gz"
else
  asset="openstudy-${platform}-${arch}.zip"
fi

version="${OPENSTUDY_VERSION:-latest}"
if [ "$version" = "latest" ]; then
  url="https://github.com/${REPO}/releases/latest/download/${asset}"
else
  url="https://github.com/${REPO}/releases/download/${version}/${asset}"
fi

echo "🎓 Instalando OpenStudy para ${platform}-${arch}..."
mkdir -p "$INSTALL_DIR"

archive="$TMP_DIR/$asset"
curl -fsSL "$url" -o "$archive"

case "$asset" in
  *.tar.gz)
    tar -xzf "$archive" -C "$TMP_DIR"
    ;;
  *.zip)
    need unzip
    unzip -q "$archive" -d "$TMP_DIR"
    ;;
esac

chmod +x "$TMP_DIR/openstudy" 2>/dev/null || true
install -m 755 "$TMP_DIR/openstudy" "$INSTALL_DIR/openstudy"

install_engram() {
  if has engram; then
    echo "  · Engram ya está instalado"
    return
  fi

  echo "🧠 Instalando Engram..."
  if has brew; then
    brew install gentleman-programming/tap/engram
    return
  fi

  if ! has python3; then
    echo "  ! No se pudo instalar Engram automáticamente: falta python3 o brew"
    return
  fi

  local engram_asset="engram_latest_${platform}_${engram_arch}"
  local engram_url
  engram_url="$(python3 - "$platform" "$engram_arch" <<'PY'
import json, urllib.request, sys
platform = sys.argv[1]
arch = sys.argv[2]
api = 'https://api.github.com/repos/Gentleman-Programming/engram/releases/latest'
with urllib.request.urlopen(api) as r:
    data = json.load(r)
needle = f'_{platform}_{arch}'
for asset in data['assets']:
    name = asset['name']
    if needle in name and (name.endswith('.tar.gz') or name.endswith('.zip')):
        print(asset['browser_download_url'])
        break
else:
    raise SystemExit('')
PY
)"

  if [ -z "$engram_url" ]; then
    echo "  ! No se encontró un asset compatible de Engram"
    return
  fi

  local engram_archive="$TMP_DIR/engram-asset"
  curl -fsSL "$engram_url" -o "$engram_archive"
  case "$engram_url" in
    *.tar.gz) tar -xzf "$engram_archive" -C "$TMP_DIR" ;;
    *.zip) unzip -q "$engram_archive" -d "$TMP_DIR" ;;
  esac

  local engram_bin
  engram_bin="$(find "$TMP_DIR" -type f -name 'engram' | head -1)"
  if [ -n "$engram_bin" ]; then
    install -m 755 "$engram_bin" "$INSTALL_DIR/engram"
    echo "  ✓ Engram instalado en $INSTALL_DIR/engram"
  else
    echo "  ! Falló la instalación automática de Engram"
  fi
}

check_npm() {
  if has npm; then
    NPM_AVAILABLE=1
  else
    echo "⚠️  npm no encontrado. Los MCPs (filesystem, notion, notebooklm) usan 'npx' y"
    echo "   se descargarán automáticamente al primer uso. Instala Node.js para activarlos:"
    echo "   https://nodejs.org/"
  fi
}

install_engram
check_npm

if [ -f "$TMP_DIR/setup-openstudy.sh" ]; then
  chmod +x "$TMP_DIR/setup-openstudy.sh"
  "$TMP_DIR/setup-openstudy.sh"
fi

echo
echo "✅ OpenStudy instalado en: $INSTALL_DIR/openstudy"
echo
echo "Si '$INSTALL_DIR' no está en tu PATH, agrega esto a tu shell:"
echo "  export PATH=\"$INSTALL_DIR:\$PATH\""
echo
if [ "$NPM_AVAILABLE" -eq 1 ]; then
  echo "MCPs activos: filesystem, engram, notion, notebooklm (vía npx)"
else
  echo "MCPs activos: engram"
  echo "MCPs pendientes (requieren Node.js): filesystem, notion, notebooklm"
fi
echo "Variables opcionales: NOTION_TOKEN, NOTEBOOKLM_PROFILE"
echo
echo "Siguiente paso:"
echo "  openstudy providers login"
echo "  openstudy"
