const btnTranslateText = document.querySelector('#translate_text')
const btnTranslateTitle = document.querySelector('#translate_title')

/**
 * Récupère l'onglet actif
 * @returns {*} L'onglet actif de la fenêtre actuel
 */
async function getActiveTab () {
    /**
     * TODO:
     * - Utiliser l'API chrome.tabs afin de récupérer l'onglet actif
     * TIPS:
     * - Ne pas oublier d'ajouter la popup dans le manifest.json
     * - Même si on attend qu'un seul onglet, l'API retourne un liste
     */
}

/**
 * Envois un message au content-script
 * @param {string} type Le type du message
 * @param {*} data La donnée à envoyer
 * @returns La réponse du content-script
 */
async function sendMessageToContentScript (type, data = null) {
    const tab = await getActiveTab()

    /**
     * TODO:
     * - Utiliser l'API chrome.tabs afin d'envoyer le message {type, data}
     * - La fonctino doit retourner la réponse
     */
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
