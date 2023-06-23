import lyrics from '../data/dinos.json'

export function getRandomTitle () {
    const lyricIndex = Math.floor(Math.random() * lyrics.length)
    return lyrics[lyricIndex]
}