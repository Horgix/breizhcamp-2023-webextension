import textToDino from './tradino.js'

export function getTextNode (node) {
    let nodes = []
    if (node.nodeType === Node.TEXT_NODE) {
        nodes.push(node)
    } else {
        node.childNodes.forEach(childNode => {
            nodes = [...nodes, ...getTextNode(childNode)]
        })
    }
    return nodes
}

const textNodes = Array.from(document.querySelectorAll('p')).map(getTextNode).flat()
const validTextNodes = textNodes.filter(node => node?.textContent?.length > 0)
translate('p', textToDino)
