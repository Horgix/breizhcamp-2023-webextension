import { Parcel } from '@parcel/core'
import { mv3ChromeToFirefoxTransformer, prettifyLog, timeTransformer } from './utils.js'

const bundler = new Parcel({
  entries: './src/manifest.json',
  defaultConfig: '@parcel/config-webextension'
})

try {
  const { bundleGraph, buildTime } = await bundler.run()
  const bundles = bundleGraph.getBundles()
  mv3ChromeToFirefoxTransformer()
  process.stdout.write('✨ ' + prettifyLog(`Built ${bundles.length} bundles in ${timeTransformer(buildTime)}`))
} catch (err) {
  console.error(err)
}
