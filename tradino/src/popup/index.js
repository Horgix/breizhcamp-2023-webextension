const btnTranslateText = document.querySelector('#translate_text')
const btnTranslateTitle = document.querySelector('#translate_title')

async function getActiveTab () {
    const tabs = await chrome.tabs.query({ currentWindow: true, active: true })
    return tabs[0]
}

async function sendMessageToContentScript (type, data = null) {
    const tab = await getActiveTab()
    return await chrome.tabs.sendMessage(tab.id, { type, data })
}

function doTranslate (type) {
    sendMessageToContentScript('do_translate_' + type)
        .catch(console.error)
}

btnTranslateText.onclick = () => doTranslate('text')
btnTranslateTitle.onclick = () => doTranslate('title')
