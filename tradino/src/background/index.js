import lyrics from '../data/dinos.json'

/**
 * Sélectionne aléatoirement une ligne du fichier dinos.json
 * @returns Une ligne du fichier dinos.json
 */
function getRandomTitle () {
    const lyricIndex = Math.floor(Math.random() * lyrics.length)
    return lyrics[lyricIndex]
}

chrome.runtime.onMessage.addListener(({ type, data }, sender) => {
    console.debug(`Message from ${(sender.tab) ? 'content-script' : 'extension'} of type: ${type}`)

    switch (type) {
    case 'translate_to_dinos':
        return Promise.resolve(getRandomTitle())
    default:
    }
})

/**
 * TODO:
 * - Utiliser l'API chrome.action.onClicked afin d'envoyer un message au content-script
 */
chrome.action.onClicked.addListener(async tab => {
    await chrome.tabs.sendMessage(tab.id, {type: 'do_translate'})
})