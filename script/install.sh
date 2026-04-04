#!/usr/bin/env bash
set -euo pipefail

REPO="AndreRaz/openstudy"
INSTALL_DIR="${OPENSTUDY_INSTALL_DIR:-${XDG_BIN_DIR:-$HOME/.local/bin}}"
TMP_DIR="$(mktemp -d)"

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
  x86_64|amd64) arch="x64" ;;
  arm64|aarch64) arch="arm64" ;;
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
echo "Siguiente paso:"
echo "  openstudy providers login"
echo "  openstudy"
