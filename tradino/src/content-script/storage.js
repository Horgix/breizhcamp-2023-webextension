/**
 * Ajoute / Met à jours les stats au storage local
 * @param {string} type Le type de stats ('text' ou 'title')
 * @param {number} value Valeur de la stats
 * @returns
 */
export async function setStats (type, value) {

    const key = document.location.href + '::' + type
    let initialValue = (await chrome.storage.local.get({[key]: 0}))[key]

    console.log(`Storage[${type}] updated from ${initialValue} to ${initialValue + value}`)

    return chrome.storage.local.set({[key]: initialValue + value})
}
