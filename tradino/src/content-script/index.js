import textToDino from './tradino.js'
import titleToDinos from './tradinos.js'
import { setStats } from './storage.js'

/**
 * Parcourt itérativement tous les descendants du noeud donné à la recherche de noeuds de type texte
 * @param {*} node Le noeud de départ
 * @returns Une liste de noeuds de type texte dont le contenu n'est pas vide
 */
export function getTextNode (node) {
    let nodes = []
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.length > 0) {
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
    const total_points = await Promise.all(textNodes.map(action))
    let total = 0
    if (total_points.length > 0) { total = total_points.reduce((a, b) => a + b) }
    return total
}

chrome.runtime.onMessage.addListener(({ type, data }, sender, sendResponse) => {
    switch (type) {
    case 'do_translate_text':
        translate('p', textToDino)
        .then(async total => {
            await setStats('text', total)
            sendResponse(true)
        })
        break
    case 'do_translate_title':
        translate('h1, h2', titleToDinos)
        .then(async total => {
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
