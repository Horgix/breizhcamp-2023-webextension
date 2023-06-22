import lyrics from '../data/dinos_lyrics.json'

export function getRandomTitle () {
    const lyricIndex = Math.floor(Math.random() * lyrics.length)
    return lyrics[lyricIndex]
}

/**
 * Les différentes zones de stockage:
 * - "local": Les items dans local sont limités à l'appareil sur lequel l'extension a été installée.
 * - "sync": Les items dans sync sont synchronisés par le navigateur, et disponibles pour
 * toutes les instances de ce navigateur auxquelles l'utilisateur est connecté, pour tous les appareils.
 * - "managed": Les items dans managed sont en écriture pour l'administrateur du domaine et en lecture seule pour l'extension.
 */
export async function setStats (key, value) {
    // Donner un dictionnaire comme clé permet de définir une valeur par défaut
    const data = await chrome.storage.local.get({[key]: 0})
    await chrome.storage.local.set({
        [key]: data[key] ? data[key] + value : value
    })
    console.log("ADDING 1", data)
}

export function getStats (key) {
    chrome.storage.local.get(key)
}
