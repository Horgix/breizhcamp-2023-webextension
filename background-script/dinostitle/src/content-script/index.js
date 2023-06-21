function getTextNode (node, action) {
    if (node.nodeType === Node.TEXT_NODE) {
        action(node)
    } else {
        node.childNodes.forEach(childNode => getTextNode(childNode, action))
    }
}

async function translateToDinos (node) {
    const res = await chrome.runtime.sendMessage({
        type: 'translate_to_dinos',
        data: {
            text: node.textContent
        }
    })
    if (res) node.textContent = res
}

document.querySelectorAll('h1, h2, h3, h4').forEach(node => getTextNode(node, translateToDinos))