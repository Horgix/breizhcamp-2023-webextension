const btnTranslateText = document.querySelector('#translate_text')
const btnTranslateTitle = document.querySelector('#translate_title')
const titleCounter = document.querySelector('#title_count')
const textCounter = document.querySelector('#text_count')
const btnResetAll = document.querySelector('#reset')
const btnOptionPage = document.querySelector('#option_page')

/**
 * Récupère l'onglet actif
 * @returns {*} L'onglet actif de la fenêtre actuel
 */
async function getActiveTab () {
    const tabs = await chrome.tabs.query({ currentWindow: true, active: true })
    return tabs[0]
}

/**
 * Envois un message au content-script
 * @param {string} type Le type du message
 * @param {*} data La donnée à envoyer
 * @returns La réponse du content-script
 */
async function sendMessageToContentScript (type, data = null) {
    const tab = await getActiveTab()
    return await chrome.tabs.sendMessage(tab.id, { type, data })
}

/**
 * Met à jour les stats pour le site actuel
 */
async function updateStats () {
    const tab = await getActiveTab()

    const textKey = tab.url + '::' + 'text'
    const titleKey = tab.url + '::' + 'title'

    chrome.storage.local.get({[textKey]: 0, [titleKey]: 0}).then((result) => {
        textCounter.textContent = result[textKey]
        titleCounter.textContent = result[titleKey]
    })
    .catch(err => sendMessageToContentScript('error', err))
}

/**
 * Supprime les stats du site actuel
 */
async function removeStats () {
    const tab = await getActiveTab()

    const textKey = tab.url + '::' + 'text'
    const titleKey = tab.url + '::' + 'title'
    await chrome.storage.local.set({[textKey]: 0, [titleKey]: 0})

    updateStats()
}

/**
 * Demande au content-script d'effectuer une traduction
 * @param {*} type Le type de traduction à faire
 */
function doTranslate (type) {
    sendMessageToContentScript('do_translate_' + type)
        .then(updateStats)
        .catch(console.error)
}

btnTranslateText.onclick = () => doTranslate('text')
btnTranslateTitle.onclick = () => doTranslate('title')
btnResetAll.onclick = () => removeStats()

updateStats()
