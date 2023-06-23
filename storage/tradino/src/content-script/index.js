import { getTextNode, setStats, getStats } from './utils.js'
import translateToDino from './tradino.js'
import translateToDinos from './tradinos.js'

function translate(patern, action) {
    const textNodes = Array.from(document.querySelectorAll(patern)).map(getTextNode).flat()
    const validTextNodes = textNodes.filter(node => node?.textContent?.length > 0)
    validTextNodes.forEach(action)
    return validTextNodes.length
}

chrome.runtime.onMessage.addListener(({ type, data }, sender, sendResponse) => {
    let total = 0
    switch (type) {
    case 'do_translate_text':
        total = translate('p, a', translateToDino)
        setStats("text", total)
        .then(sendResponse(true))
        break
    case 'do_translate_title':
        total = translate('h1, h2, h3, h4, h5', translateToDinos)
        setStats("title", total)
        .then(sendResponse(true))
        break
    case 'get_stats':
        getStats()
        .then(sendResponse)
        .catch(console.error)
        break
    default:
        console.log(type + ":", data)
    }

    // Nécéssaire pour réaliser une réponse asynchrone
    return true
})
