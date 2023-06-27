const inputTextSelectors = document.querySelector('input[name=text_selectors]')
const inputTitleSelectors = document.querySelector('input[name=title_selectors]')

/**
 * Enregistre les changement d'option dans le stockage local
 * @param {Event} {target} La cible de l'évènement en cours
 */
function handleOptions ({ target }) {
    /**
     * TODO:
     * - Utiliser l'API chrome.storage.local pour enregistrer le changement
     * TIPS:
     * - L'argument target comprend plusieurs valeurs:
     *      - name: Le nom donné à la balise (ici 'text_selectors' ou 'title_selectors')
     *      - value: La valeur de l'input
     */
}

inputTextSelectors.onchange = handleOptions
inputTitleSelectors.onchange = handleOptions

/**
 * TODO:
 * - Afficher les options sur la page HTML
 * TIPS:
 * - Ne pas oublier de mettre une valeur par défaut
 * - Il est possible de modifier la valeur d'un input avec ex: inputTextSelectors.value = "foo"
 */
