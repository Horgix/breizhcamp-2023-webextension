export const grrosettaStone = {
    add: ['a', 'e', 'i', 'o', 'u', 'y'],
    replace: ['th', 'ph', 'ch', 'gl', 'pl', 'fl', 'cl']
}

export function getTextNode (node, action) {
    if (node.nodeType === Node.TEXT_NODE) {
        action(node)
    } else {
        node.childNodes.forEach(childNode => getTextNode(childNode, action))
    }
}

export async function sendMessageToBackground (type, data) {
    return await chrome.runtime.sendMessage({ type, data })
}

export async function setStats (prefix) {
    const value = document[prefix === "text" ? "translatedWords" : "translatedTitles"]
    const storageKey = document.location.href + '::' + prefix

    const data = await chrome.storage.local.get({ [storageKey]: 0 })
    chrome.storage.local.set({ [storageKey]: data[storageKey] + value })
        .then(() => console.log('ok'))
        .catch(console.error)
}
