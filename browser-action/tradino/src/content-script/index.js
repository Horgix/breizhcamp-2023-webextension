import { getTextNode } from './utils.js'
import translateToDino from './tradino.js'
import translateToDinos from './tradinos.js'

chrome.runtime.onMessage.addListener(({ type, data }, sender, sendResponse) => {
    console.debug(`Message from ${(sender.tab) ? 'content-script' : 'extension'} of type: ${type}`)

    switch (type) {
    case 'log':
        console.log('log from ' + data.from + ':', data.text)
        break
    default:
    }
})

document.querySelectorAll('p, a').forEach(node => getTextNode(node, translateToDino))
document.querySelectorAll('h1, h2, h3, h4').forEach(node => getTextNode(node, translateToDinos))
