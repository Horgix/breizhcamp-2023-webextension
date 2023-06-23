import { getRandomTitle } from './utils.js'

chrome.runtime.onMessage.addListener(async ({ type, data }, sender, sendResponse) => {
    console.debug(`Message from ${(sender.tab) ? 'content-script' : 'extension'} of type: ${type}`)

    switch (type) {
    case 'translate_to_dinos':
        sendResponse(getRandomTitle())
        break
    default:
    }
})

// Ne se lance pas si le manifest.json spécifie une popup.
// chrome.action.onClicked.addListener(async tab => {
//     chrome.tabs.sendMessage(tab.id, { type: 'do_translation' })
// })
