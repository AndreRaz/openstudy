$ErrorActionPreference = 'Stop'

$Repo = 'AndreRaz/openstudy'
$InstallDir = if ($env:OPENSTUDY_INSTALL_DIR) { $env:OPENSTUDY_INSTALL_DIR } else { Join-Path $HOME '.local\bin' }
$TmpDir = Join-Path ([System.IO.Path]::GetTempPath()) ("openstudy-install-" + [guid]::NewGuid().ToString())

New-Item -ItemType Directory -Force -Path $TmpDir | Out-Null
New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null

try {
  $arch = if ([Environment]::Is64BitOperatingSystem) { 'x64' } else { throw 'Windows x86 no está soportado.' }
  $asset = "openstudy-windows-$arch.zip"

  $version = if ($env:OPENSTUDY_VERSION) { $env:OPENSTUDY_VERSION } else { 'latest' }
  if ($version -eq 'latest') {
    $url = "https://github.com/$Repo/releases/latest/download/$asset"
  } else {
    $url = "https://github.com/$Repo/releases/download/$version/$asset"
  }

  Write-Host "🎓 Instalando OpenStudy para windows-$arch..." -ForegroundColor Cyan

  $archive = Join-Path $TmpDir $asset
  Invoke-WebRequest -Uri $url -OutFile $archive
  Expand-Archive -Path $archive -DestinationPath $TmpDir -Force

  Copy-Item (Join-Path $TmpDir 'openstudy.exe') (Join-Path $InstallDir 'openstudy.exe') -Force

  if (Test-Path (Join-Path $TmpDir 'setup-openstudy.ps1')) {
    & (Join-Path $TmpDir 'setup-openstudy.ps1')
  }

  Write-Host ''
  Write-Host "✅ OpenStudy instalado en: $InstallDir\openstudy.exe" -ForegroundColor Green
  Write-Host ''
  Write-Host 'Si ese directorio no está en tu PATH, agrégalo a tus variables de entorno.'
  Write-Host 'Siguiente paso:'
  Write-Host '  openstudy providers login'
  Write-Host '  openstudy'
}
finally {
  Remove-Item -Recurse -Force $TmpDir -ErrorAction SilentlyContinue
}
