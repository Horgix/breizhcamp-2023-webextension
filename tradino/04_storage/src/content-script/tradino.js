import grrosettaStone from '../data/grrosetta_stone.json'

function _translate (word) {
    const isUpper = word.slice(0, 1) === word.slice(0, 1).toUpperCase()
    const baseWord = isUpper ? 'Gr' : 'gr'

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

export default async function translateToDino (node) {
    const content = []
    for (const word of node.textContent.split(/\s/)) {
        if (word.length <= 1) continue
        const translatedWord = _translate(word)
        content.push(translatedWord)
    }

    if (content.length > 0) {
        node.textContent = content.join(' ')
    }

    return content.length
}
