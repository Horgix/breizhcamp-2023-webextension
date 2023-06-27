/**
 * Remplace un texte par une phrase de Dinos
 * @param {Node} node Le noeud texte à remplacer
 */
export default async function titleToDinos (node) {
    /**
     * TODO
     * - Envoyer un message au service-worker avec chrome.runtime.sendMessage() afin de récupérer un titre (attention, c'est une fonction async).
     * - Changer le textContent de la node avec le titre récupéré
     */
    const res = await chrome.runtime.sendMessage({type: 'translate_to_dinos'})
    node.textContent = res
}
