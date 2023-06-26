export async function setStats (prefix, value) {
    const storageKey = document.location.href + '::' + prefix

    const data = await chrome.storage.local.get({ [storageKey]: 0 })
    return chrome.storage.local.set({ [storageKey]: data[storageKey] + value })
        .then(() => console.log('ok'))
        .catch(console.error)
}
