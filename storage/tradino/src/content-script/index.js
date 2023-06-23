import translateToDino from './tradino.js'
import translateToDinos from './tradinos.js'
import { setStats } from './storage.js'

export function getTextNode (node) {
    let nodes = []
    if (node.nodeType === Node.TEXT_NODE) {
        nodes.push(node)
    } else {
        node.childNodes.forEach(childNode => {
            nodes = [...nodes, ...getTextNode(childNode)]
        })
    }
    return nodes
}

async function translate (patern, action) {
    const textNodes = Array.from(document.querySelectorAll(patern)).map(getTextNode).flat()
    const validTextNodes = textNodes.filter(node => node?.textContent?.length > 0)
    const total_points = await Promise.all(validTextNodes.map(action))
    const total = total_points.reduce((a, b) => a + b)
    return total
}

chrome.runtime.onMessage.addListener(({ type, data }, sender, sendResponse) => {
    switch (type) {
    case 'do_translate_text':
        translate('p, a', translateToDino)
            .then(async total => {
                await setStats('text', total)
                sendResponse(true)
            })
        break
    case 'do_translate_title':
        translate('h1, h2, h3, h4, h5, h6', translateToDinos)
            .then(async total => {
                await setStats('title', total)
                sendResponse(true)
            })
        break
    default:
        console.log(type + ':', data)
    }

    // Nécéssaire pour réaliser une réponse asynchrone
    return true
})
