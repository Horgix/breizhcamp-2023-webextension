import { getTextNode, setStats } from './utils.js'
import translateToDino from './tradino.js'
import translateToDinos from './tradinos.js'

document.translatedWords = 0
document.translatedTitles = 0


chrome.runtime.onMessage.addListener(({ type, data }, sender, sendResponse) => {
    switch (type) {
    case 'do_translate_text':
        document.querySelectorAll('p, a').forEach(node => getTextNode(node, translateToDino))
        setStats("text")
        break
    case 'do_translate_title':
        document.querySelectorAll('h1, h2, h3, h4').forEach(node => getTextNode(node, translateToDinos))
        setStats("title")
        break
    }
})
