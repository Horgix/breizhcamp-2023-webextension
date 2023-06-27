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
 * - Utiliser l'API chrome.action.onClicked (ne pas oublier addListener) afin d'envoyer un message au content-script
 */
