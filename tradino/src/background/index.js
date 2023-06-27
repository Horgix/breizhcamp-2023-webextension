import lyrics from '../data/dinos.json'

function getRandomTitle () {
    const lyricIndex = Math.floor(Math.random() * lyrics.length)
    return lyrics[lyricIndex]
}

chrome.runtime.onMessage.addListener(({ type, data }, sender) => {
    console.debug(`Message from ${(sender.tab) ? 'content-script' : 'extension'} of type: ${type}`)

    switch (type) {
    case 'translate_to_dinos':
        return Promise.resolve(getRandomTitle())
    default:
    }
})
