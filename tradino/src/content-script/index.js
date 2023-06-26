import textToDino from './tradino.js'
import titleToDinos from './tradinos.js'

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

async function translate (pattern, action) {
    const textNodes = Array.from(document.querySelectorAll(pattern)).map(getTextNode).flat()
    const validTextNodes = textNodes.filter(node => node?.textContent?.length > 0)
    validTextNodes.map(action)
}

chrome.runtime.onMessage.addListener(({ type, data }, sender, sendResponse) => {
    switch (type) {
    case 'do_translate_text':
        translate('p', textToDino)
        break
    case 'do_translate_title':
        translate('h1, h2', titleToDinos)
        break
    default:
        // Permet d'envoyer des logs au content-script (debugging)
        console.log(type + ':', data)
    }

    // Nécéssaire pour réaliser une réponse asynchrone
    return true
})
