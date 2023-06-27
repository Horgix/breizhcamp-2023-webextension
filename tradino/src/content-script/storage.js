/**
 * Ajoute / Met à jours les stats au storage local
 * @param {string} type Le type de stats ('text' ou 'title')
 * @param {number} value Valeur de la stats
 * @returns
 */
export async function setStats (type, value) {
    /**
     * TODO:
     * - Utiliser l'API chrome.storage pour enregistrer la donnée
     * TIPS:
     * - L'utilisation de l'url dans la clé permet d'avoir des stats par site plutôt que globale
     * - Etant dans le contexte d'une page web, l'url peut être récupéré avec document.location.href
     * - Il faut récupérer la donnée avant de la modifier
     */
}
