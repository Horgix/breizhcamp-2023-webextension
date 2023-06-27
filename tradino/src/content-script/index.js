import textToDino from './tradino.js'
import titleToDinos from './tradinos.js'
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

/**
 * Applique la fonction de traduction donnée sur tous les noeuds d'un sélecteur CSS
 * @param {string} pattern Le noeud de départ
 * @param {function} action Le noeud de départ
 */
async function translate (pattern, action) {
    const textNodes = Array.from(document.querySelectorAll(pattern)).map(getTextNode).flat()
    const validTextNodes = textNodes.filter(node => node?.textContent?.length > 0)
    const total_points = await Promise.all(validTextNodes.map(action))
    let total = 0
    if (total_points.length > 0) { total = total_points.reduce((a, b) => a + b) }
    return total
}

chrome.runtime.onMessage.addListener(({ type, data }, sender, sendResponse) => {
    switch (type) {
    case 'do_translate_text':
        chrome.storage.local.get({ text_selectors: 'p' })
            .then(async data => {
                const selectors = data.text_selectors
                const total = await translate(selectors, textToDino)
                await setStats('text', total)
                sendResponse(true)
            })
        break
    case 'do_translate_title':
        chrome.storage.local.get({ title_selectors: 'h1, h2' })
            .then(async data => {
                const selectors = data.title_selectors
                const total = await translate(selectors, titleToDinos)
                await setStats('title', total)
                sendResponse(true)
            })
        break
    default:
        // Permet d'envoyer des logs au content-script (debugging)
        console.log(type + ':', data)
    }

    // Nécéssaire pour réaliser une réponse asynchrone
    return true
})
