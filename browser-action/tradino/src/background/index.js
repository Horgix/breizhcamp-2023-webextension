import { getRandomTitle } from './utils.js'

chrome.runtime.onMessage.addListener(({ type, data }, sender, sendResponse) => {
    console.debug(`Message from ${(sender.tab) ? 'content-script' : 'extension'} of type: ${type}`)

    switch (type) {
    case 'translate_to_dinos':
        sendResponse(getRandomTitle())
        break
    default:
    }
})

chrome.action.onClicked.addListener(async tab => {
    chrome.tabs.sendMessage(tab.id, { type: 'do_translation' })
})
