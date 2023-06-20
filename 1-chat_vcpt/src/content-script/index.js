const dinosettaStone = {
    add: ["a", "e", "i", "o", "u"],
    replace: ["th", "ph"]
}

function wordToDino(word) {
    const replaceRegexp = new RegExp("^("+dinosettaStone.replace.join("|")+")", "i")
    const addRegexp = new RegExp("^("+dinosettaStone.add.join("|")+")", "i")

    if (replaceRegexp.test(word)) 
        return word.replace(replaceRegexp, "gr")
    else if (addRegexp.test(word))
        return word.toLowerCase().replace(addRegexp, "grr$1")
    else if (/^[1-9]/.test(word))
        return word
    else return "gr" + word.slice(1)
}

function paragrapheToDino(node) {
    console.log(node.textContent)
    if (node.textContent.length === 0) return node
    newP = []
    for (word of node.textContent.split(/\s/)) {
        if (word.length === 0) continue
        translatedWord = wordToDino(word)
        newP.push(translatedWord)
    }
    newP.push("\n")
    newP[0] = newP[0].slice(0, 1).toUpperCase() + newP[0].slice(1)
    node.textContent = newP.join(" ")
}

document.querySelectorAll("p").forEach(paragrapheToDino)
