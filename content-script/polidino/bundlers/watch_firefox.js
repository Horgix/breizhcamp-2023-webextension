import { Parcel } from '@parcel/core'
import { mv3ChromeToFirefoxTransformer, prettifyLog, timeTransformer } from './utils.js'

const bundler = new Parcel({
  entries: './src/manifest.json',
  defaultConfig: '@parcel/config-webextension'
})

let firstRun = true
try {
  await bundler.watch((err, buildEvent) => {
    if (err) console.error(err)
    else {
      if (!firstRun) {
        process.stdout.clearLine(0)
        process.stdout.cursorTo(0)
      }
      process.stdout.write('✨ ' + prettifyLog(`Built in ${timeTransformer(buildEvent.buildTime)}`))
      mv3ChromeToFirefoxTransformer()
      if (firstRun) firstRun = false
    }
  })
} catch (err) {
  console.error(err.diagnostics)
}
