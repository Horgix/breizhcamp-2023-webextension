import { getRandomTitle, getActiveTabId } from './utils.js'

chrome.runtime.onMessage.addListener(({ type, data }, sender, sendResponse) => {
    console.debug(`Message from ${(sender.tab) ? 'content-script' : 'extension'} of type: ${type}`)

    switch (type) {
    case 'translate_to_dinos':
        sendResponse(getRandomTitle())
        break
    default:
    }
})

chrome.browserAction.onClicked.addListener(async event => {
    const tab = await getActiveTabId()
    browser.tabs.sendMessage(tab.id, { from: 'background', text: event })
})
