/**
 * Les différentes zones de stockage:
 * - "local": Les items dans local sont limités à l'appareil sur lequel l'extension a été installée.
 * - "sync": Les items dans sync sont synchronisés par le navigateur, et disponibles pour
 * toutes les instances de ce navigateur auxquelles l'utilisateur est connecté, pour tous les appareils.
 * - "managed": Les items dans managed sont en écriture pour l'administrateur du domaine et en lecture seule pour l'extension.
 */
export async function setStats (prefix, value) {
    const storageKey = document.location.href + '::' + prefix

    const data = await chrome.storage.local.get({ [storageKey]: 0 })
    return chrome.storage.local.set({ [storageKey]: data[storageKey] + value })
        .then(() => console.log('ok'))
        .catch(console.error)
}

export async function getStats () {
    const storageKey = document.location.href + '::'
    const textData = await chrome.storage.local.get({ [storageKey + 'text']: 0 })
    const titleData = await chrome.storage.local.get({ [storageKey + 'title']: 0 })
    return {
        text: textData[storageKey + 'text'],
        title: titleData[storageKey + 'title']
    }
}
