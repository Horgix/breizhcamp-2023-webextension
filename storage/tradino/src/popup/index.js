const titleCounter = document.querySelector("#title_count")
const textCounter = document.querySelector("#text_count")
const btnTranslateText = document.querySelector('#translate_text')
const btnTranslateTitle = document.querySelector('#translate_title')


async function sendMessageToContentScript (type, data=null) {
    const tabs = await chrome.tabs.query({ currentWindow: true, active: true })
    return await chrome.tabs.sendMessage(tabs[0].id, { type, data })
}


function updateStats() {
    sendMessageToContentScript('get_stats')
    .then(res => {
        textCounter.textContent = res.text
        titleCounter.textContent = res.title
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

updateStats()
