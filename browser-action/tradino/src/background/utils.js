import lyrics from '../data/dinos_lyrics.json'

export function getRandomTitle () {
    const lyricIndex = Math.floor(Math.random() * lyrics.length)
    return lyrics[lyricIndex]
}

export async function getActiveTabId () {
    return browser.tabs.query({ currentWindow: true, active: true })
}
