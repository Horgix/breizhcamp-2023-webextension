import lyrics from '../data/dinos.json'

/**
 * Sélectionne aléatoirement une ligne du fichier dinos.json
 * @returns Une ligne du fichier dinos.json
 */
function getRandomTitle () {
    const lyricIndex = Math.floor(Math.random() * lyrics.length)
    return lyrics[lyricIndex]
}

/**
 * TODO:
 * - Utiliser l'API chrome.runtime.onMessage afin de communiquer avec le content-script via addListener()
 * - Créer un chemin qui retourne le résultat de getRandomTitle
 *
 * TIPS:
 * - Structurez vos messages ex: {type: Le type du message, data: La donnée à traiter}
 * - Utilisez un switch afin de faciliter l'implémentation de plusieurs type de messages
 */
