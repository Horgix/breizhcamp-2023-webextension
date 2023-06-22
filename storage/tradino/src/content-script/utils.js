export const grrosettaStone = {
    add: ['a', 'e', 'i', 'o', 'u', 'y'],
    replace: ['th', 'ph', 'ch', 'gl', 'pl', 'fl', 'cl']
}

export async function getTextNode (node, action) {
    if (node.nodeType === Node.TEXT_NODE) {
        await action(node)
    } else {
        node.childNodes.forEach(async childNode => await getTextNode(childNode, action))
    }
}

export async function sendMessageToBackground (type, data) {
    return await chrome.runtime.sendMessage({ type, data })
}

export async function setStats () {
    const value = document.translatedWords || 0
    const storageKey = document.location.href + '::text'

    const data = await chrome.storage.local.get({ [storageKey]: 0 })
    chrome.storage.local.set({ [storageKey]: data[storageKey] + value })
        .then(() => console.log('ok'))
        .catch(console.error)
}
