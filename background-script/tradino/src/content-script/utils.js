export const grrosettaStone = {
    add: ['a', 'e', 'i', 'o', 'u'],
    replace: ['th', 'ph', 'ch']
}

export function getTextNode (node, action) {
    if (node.nodeType === Node.TEXT_NODE) {
        action(node)
    } else {
        node.childNodes.forEach(childNode => getTextNode(childNode, action))
    }
}
