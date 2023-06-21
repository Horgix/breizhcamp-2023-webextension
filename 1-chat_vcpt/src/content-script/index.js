const dinosettaStone = {
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

function wordToDino (word) {
    const replaceRegexp = new RegExp('^(' + dinosettaStone.replace.join('|') + ')', 'i')
    const addRegexp = new RegExp('^(' + dinosettaStone.add.join('|') + ')', 'i')

    if (replaceRegexp.test(word)) { return word.replace(replaceRegexp, 'gr') } else if (addRegexp.test(word)) { return word.toLowerCase().replace(addRegexp, 'grr$1') } else if (/^[1-9]/.test(word)) { return word } else return 'gr' + word.slice(1)
}

function paragrapheToDino (node) {
    if (node.nodeType === Node.TEXT_NODE) {
        const content = []
        for (const word of node.textContent.split(/\s/)) {
            if (word.length === 0) continue
            const translatedWord = wordToDino(word)
            content.push(translatedWord)
        }
        content.push('\n')
        content[0] = content[0].slice(0, 1).toUpperCase() + content[0].slice(1)
        node.textContent = content.join(' ')
    } else {
        node.childNodes.forEach(paragrapheToDino)
    }
}

async function titleToDinos (node) {
    const res = await chrome.runtime.sendMessage({
        type: 'get_dinos_title'
    })
    if (res) node.textContent = res
}

document.querySelectorAll('p, a').forEach(node => getTextNode(node, paragrapheToDino))
document.querySelectorAll('h1, h2, h3, h4').forEach(node => getTextNode(node, titleToDinos))
