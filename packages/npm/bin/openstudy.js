#!/usr/bin/env node
'use strict'

const { spawnSync } = require('child_process')
const path = require('path')
const os = require('os')

const binName = os.platform() === 'win32' ? 'openstudy-bin.exe' : 'openstudy-bin'
const binPath = path.join(__dirname, binName)

const result = spawnSync(binPath, process.argv.slice(2), { stdio: 'inherit' })

if (result.error) {
  if (result.error.code === 'ENOENT') {
    console.error('openstudy: binario no encontrado. Reinstalá el paquete: npm install -g neuxora-openstudy')
  } else {
    console.error(`openstudy: ${result.error.message}`)
  }
  process.exit(1)
}

process.exit(result.status ?? 0)
