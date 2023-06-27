/**
 * Ajoute / Met à jours les stats au storage local
 * @param {string} type Le type de stats ('text' ou 'title')
 * @param {number} value Valeur de la stats
 * @returns
 */
export async function setStats (type, value) {
    const storageKey = document.location.href

    const data = await chrome.storage.local.get({ [storageKey]: { text: 0, title: 0 } })
    data[storageKey][type] += value
    return chrome.storage.local.set({ [storageKey]: data[storageKey] })
        .then(() => console.log('ok'))
        .catch(console.error)
}
