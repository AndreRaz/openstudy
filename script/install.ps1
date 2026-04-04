$ErrorActionPreference = 'Stop'

$Repo = 'AndreRaz/openstudy'
$InstallDir = if ($env:OPENSTUDY_INSTALL_DIR) { $env:OPENSTUDY_INSTALL_DIR } else { Join-Path $HOME '.local\bin' }
$TmpDir = Join-Path ([System.IO.Path]::GetTempPath()) ("openstudy-install-" + [guid]::NewGuid().ToString())
$NpmAvailable = $false

function Has-Command($Name) {
  return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

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

  if (-not (Has-Command 'engram')) {
    Write-Host '🧠 Instalando Engram...' -ForegroundColor Cyan
    $release = Invoke-RestMethod -Uri 'https://api.github.com/repos/Gentleman-Programming/engram/releases/latest'
    $assetUrl = ($release.assets | Where-Object { $_.name -like 'engram_*_windows_amd64.zip' } | Select-Object -First 1).browser_download_url
    if ($assetUrl) {
      $engramArchive = Join-Path $TmpDir 'engram.zip'
      Invoke-WebRequest -Uri $assetUrl -OutFile $engramArchive
      Expand-Archive -Path $engramArchive -DestinationPath (Join-Path $TmpDir 'engram') -Force
      $engramExe = Get-ChildItem -Path (Join-Path $TmpDir 'engram') -Recurse -Filter 'engram.exe' | Select-Object -First 1
      if ($engramExe) {
        Copy-Item $engramExe.FullName (Join-Path $InstallDir 'engram.exe') -Force
      }
    }
  } else {
    Write-Host '  · Engram ya está instalado'
  }

  if (Has-Command 'npm') {
    $NpmAvailable = $true
  } else {
    Write-Host '⚠️  npm no encontrado. Los MCPs (filesystem, notion, notebooklm) usan npx y' -ForegroundColor Yellow
    Write-Host '   se descargarán automáticamente al primer uso. Instala Node.js para activarlos:' -ForegroundColor Yellow
    Write-Host '   https://nodejs.org/' -ForegroundColor Yellow
  }

  if (Test-Path (Join-Path $TmpDir 'setup-openstudy.ps1')) {
    & (Join-Path $TmpDir 'setup-openstudy.ps1')
  }

  Write-Host ''
  Write-Host "✅ OpenStudy instalado en: $InstallDir\openstudy.exe" -ForegroundColor Green
  Write-Host ''
  if ($NpmAvailable) {
    Write-Host 'MCPs activos: filesystem, engram, notion, notebooklm (vía npx)'
  } else {
    Write-Host 'MCPs activos: engram'
    Write-Host 'MCPs pendientes (requieren Node.js): filesystem, notion, notebooklm' -ForegroundColor Yellow
  }
  Write-Host 'Variables opcionales: NOTION_TOKEN, NOTEBOOKLM_PROFILE'
  Write-Host 'Si ese directorio no está en tu PATH, agrégalo a tus variables de entorno.'
  Write-Host 'Siguiente paso:'
  Write-Host '  openstudy providers login'
  Write-Host '  openstudy'
}
finally {
  Remove-Item -Recurse -Force $TmpDir -ErrorAction SilentlyContinue
}
