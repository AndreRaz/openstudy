#!/usr/bin/env node
'use strict'

const https = require('https')
const fs = require('fs')
const path = require('path')
const os = require('os')
const { execSync } = require('child_process')

const pkg = require('./package.json')
const version = pkg.version

const platform = os.platform()
const arch = os.arch()

const platformMap = { linux: 'linux', darwin: 'darwin', win32: 'windows' }
const archMap = { x64: 'x64', arm64: 'arm64' }

const osPlatform = platformMap[platform]
const osArch = archMap[arch]

if (!osPlatform || !osArch) {
  console.error(`openstudy: plataforma no soportada: ${platform}-${arch}`)
  process.exit(1)
}

const ext = platform === 'linux' ? 'tar.gz' : 'zip'
const assetName = `openstudy-${osPlatform}-${osArch}.${ext}`
const url = `https://github.com/AndreRaz/openstudy/releases/download/v${version}/${assetName}`

const binDir = path.join(__dirname, 'bin')
const binName = platform === 'win32' ? 'openstudy-bin.exe' : 'openstudy-bin'
const binPath = path.join(binDir, binName)

if (fs.existsSync(binPath)) {
  process.exit(0)
}

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'openstudy-'))
const archivePath = path.join(tmpDir, assetName)

console.log(`openstudy: descargando ${assetName}...`)

function download(url, dest, cb) {
  const file = fs.createWriteStream(dest)
  https.get(url, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      file.close()
      return download(res.headers.location, dest, cb)
    }
    if (res.statusCode !== 200) {
      file.close()
      return cb(new Error(`HTTP ${res.statusCode} al descargar ${url}`))
    }
    res.pipe(file)
    file.on('finish', () => file.close(cb))
  }).on('error', cb)
}

download(url, archivePath, (err) => {
  if (err) {
    console.error(`openstudy: falló la descarga — ${err.message}`)
    console.error('Podés instalar manualmente desde: https://github.com/AndreRaz/openstudy/releases')
    process.exit(1)
  }

  console.log('openstudy: extrayendo...')

  try {
    if (ext === 'tar.gz') {
      execSync(`tar -xzf "${archivePath}" -C "${tmpDir}"`, { stdio: 'pipe' })
    } else if (platform === 'win32') {
      execSync(
        `powershell -NoProfile -Command "Expand-Archive -Path '${archivePath}' -DestinationPath '${tmpDir}' -Force"`,
        { stdio: 'pipe' }
      )
    } else {
      execSync(`unzip -q "${archivePath}" -d "${tmpDir}"`, { stdio: 'pipe' })
    }
  } catch (e) {
    console.error(`openstudy: falló la extracción — ${e.message}`)
    process.exit(1)
  }

  const srcName = platform === 'win32' ? 'openstudy.exe' : 'openstudy'
  const srcBin = path.join(tmpDir, srcName)

  if (!fs.existsSync(srcBin)) {
    console.error('openstudy: no se encontró el binario en el archivo descargado')
    process.exit(1)
  }

  fs.mkdirSync(binDir, { recursive: true })
  fs.copyFileSync(srcBin, binPath)

  if (platform !== 'win32') {
    fs.chmodSync(binPath, 0o755)
  }

  try {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  } catch (_) {}

  console.log('openstudy: ¡instalado correctamente!')
  console.log('  Ejecutá: openstudy providers login')
  console.log('  Luego:   openstudy')
})
