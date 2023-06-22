import { getTextNode } from './utils.js'
import translateToDino from './tradino.js'
import translateToDinos from './tradinos.js'

chrome.runtime.onMessage.addListener(({ type, data }, sender, sendResponse) => {
    switch (type) {
    case 'do_translation':
        document.querySelectorAll('p, a').forEach(node => getTextNode(node, translateToDino))
        document.querySelectorAll('h1, h2, h3, h4').forEach(node => getTextNode(node, translateToDinos))
    }
})
