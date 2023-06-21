const grrosettaStone = {
    add: ['a', 'e', 'i', 'o', 'u'],
    replace: ['th', 'ph', 'ch']
}

function getTextNode (node, action) {
    if (node.nodeType === Node.TEXT_NODE) {
        action(node)
    } else {
        node.childNodes.forEach(childNode => getTextNode(childNode, action))
    }
}

function translator(word) {
    const isUpper = word.slice(0, 1) === word.slice(0, 1).toUpperCase()
    const baseWord = isUpper ? "Gr" : "gr" 

    const replaceRegexp = new RegExp('^(' + grrosettaStone.replace.join('|') + ')', 'i')
    const addRegexp = new RegExp('^(' + grrosettaStone.add.join('|') + ')', 'i')

    if (replaceRegexp.test(word)) { 
        return word.replace(replaceRegexp, baseWord)
    } else if (addRegexp.test(word)) {
        return word.toLowerCase().replace(addRegexp, `${baseWord}r$1`)
    } else if (/^[1-9]/.test(word)) {
        return word 
    } else return baseWord + word.slice(1)
}

function paragrapheToDino(node) {
    const content = []
    for (const word of node.textContent.split(/\s/)) {
        if (word.length <= 1) continue
        const translatedWord = translator(word)
        content.push(translatedWord)
    } 
    content[0] = content[0].slice(0, 1).toUpperCase() + content[0].slice(1)
    node.textContent = content.join(' ')
}

document.querySelectorAll('p, a').forEach(node => getTextNode(node, paragrapheToDino))