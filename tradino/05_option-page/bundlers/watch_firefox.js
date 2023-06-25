import { Parcel } from '@parcel/core'
import { mv3ChromeToFirefoxTransformer, prettifyLog, timeTransformer } from './utils.js'

const bundler = new Parcel({
  entries: './src/manifest.json',
  defaultConfig: '@parcel/config-webextension'
})

let firstRun = true
let subscription = await bundler.watch((err, event) => {
  if (err) {
    // fatal error
    throw err;
  }

  if (event.type === 'buildSuccess') {
    mv3ChromeToFirefoxTransformer()
    if (!firstRun) {
      process.stdout.clearLine(0)
      process.stdout.cursorTo(0)
    }
    process.stdout.write('✨ ' + prettifyLog(`Built in ${timeTransformer(event.buildTime)}`))
    if (firstRun) firstRun = false
    // let bundles = event.bundleGraph.getBundles();
  } else if (event.type === 'buildFailure') {
    console.log(event.diagnostics);
  }
});


// some time later...
// await subscription.unsubscribe();