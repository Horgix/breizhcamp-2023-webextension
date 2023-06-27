const btnTranslateText = document.querySelector('#translate_text')
const btnTranslateTitle = document.querySelector('#translate_title')

/**
 * Récupère l'onglet actif
 * @returns {*} L'onglet actif de la fenêtre actuel
 */
async function getActiveTab() {
    let queryOptions = { active: true, currentWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

/**
 * Envois un message au content-script
 * @param {string} type Le type du message
 * @param {*} data La donnée à envoyer
 * @returns La réponse du content-script
 */
async function sendMessageToContentScript (type, data = null) {
    const tab = await getActiveTab()

    return chrome.tabs.sendMessage(tab.id, {type: type})
}

/**
 * Demande au content-script d'effectuer une traduction (text ou titre)
 * @param {string} type Le type de traduction à faire
 */
function doTranslate (type) {
    sendMessageToContentScript('do_translate_' + type)
        .catch(console.error)
}

btnTranslateText.onclick = () => doTranslate('text')
btnTranslateTitle.onclick = () => doTranslate('title')
