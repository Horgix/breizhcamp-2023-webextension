import { readFileSync, writeFileSync, existsSync } from 'fs'

/**
 * Update manifest.json file in dist folder for compatibility with Firefox,
 * as Parcel doesn't handle new Firefox MV3 API.
 */
export function mv3ChromeToFirefoxTransformer () {
  if (!existsSync('./dist/manifest.json')) return
  const file = readFileSync('./dist/manifest.json')
  const manifest = JSON.parse(file)

  if (manifest.background?.service_worker) {
    const script_src = manifest.background.service_worker
    manifest.background.scripts = [script_src]
    delete manifest.background.service_worker
    writeFileSync('./dist/manifest.json', JSON.stringify(manifest))
  }
}

export function prettifyLog (text) {
  return '\x1b[1m\x1b[32m' + text + '\x1b[89m\x1b[22m\x1b[0m'
}

export function timeTransformer (time) {
  return (time > 1000) ? time / 1000 + 's' : time + 'ms'
}
