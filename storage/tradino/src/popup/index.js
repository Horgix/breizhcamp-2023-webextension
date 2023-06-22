const btnTranslateText = document.querySelector('#translate_text')
const btnTranslateTitle = document.querySelector('#translate_title')

btnTranslateText.onclick = () => sendMessageToContentScript('do_translate_text')
btnTranslateTitle.onclick = () => sendMessageToContentScript('do_translate_title')

async function sendMessageToContentScript (type, data) {
    const tabs = await chrome.tabs.query({ currentWindow: true, active: true })
    const tab = tabs[0]
    chrome.tabs.sendMessage(tab.id, { type, data })
}
