const titleCounter = document.querySelector("#title_count")
const textCounter = document.querySelector("#text_count")
const btnTranslateText = document.querySelector('#translate_text')
const btnTranslateTitle = document.querySelector('#translate_title')
const btnResetAll = document.querySelector('#reset')


async function getActiveTab() {
    const tabs = await chrome.tabs.query({ currentWindow: true, active: true })
    return tabs[0]
}

async function sendMessageToContentScript (type, data=null) {
    const tab = await getActiveTab()
    return await chrome.tabs.sendMessage(tab.id, { type, data })
}


function updateStats() {
    getActiveTab()
    .then(async tab => {
        const storageKey = tab.url + "::"
        textCounter.textContent = (await chrome.storage.local.get({[storageKey + "text"]: 0}))[storageKey + "text"]
        titleCounter.textContent = (await chrome.storage.local.get({[storageKey + "title"]: 0}))[storageKey + "title"]
    })
    .catch(console.error)
}

function removeStats() {
    getActiveTab()
    .then(async tab => {
        const storageKey = tab.url + "::"
        await chrome.storage.local.set({[storageKey + "text"]: 0})
        await chrome.storage.local.set({[storageKey + "title"]: 0})
        updateStats()
    })
    .catch(console.error)
}

function do_translate(type) {
    sendMessageToContentScript('do_translate_' + type)
    .then(updateStats)
    .catch(console.error)
}

btnTranslateText.onclick = () => do_translate('text')
btnTranslateTitle.onclick = () => do_translate('title')
btnResetAll.onclick = () => removeStats()

updateStats()
