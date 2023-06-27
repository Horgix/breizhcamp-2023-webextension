import textToDino from './tradino.js'

/**
 * Parcourt itérativement tous les descendants du noeud donné à la recherche de noeuds de type texte
 * @param {*} node Le noeud de départ
 * @returns Une liste de noeuds de type texte dont le contenu n'est pas vide
 */
export function getTextNode (node) {
    let nodes = []
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.length > 0) {
        nodes.push(node)
    } else {
        node.childNodes.forEach(childNode => {
            nodes = [...nodes, ...getTextNode(childNode)]
        })
    }
    return nodes
}

/**
 * TODO
 * - Sélectionner tous les éléments du DOM de type paragraphe (balise HTML <p>)
 * - Rechercher tous leurs descendants de type texte
 * - Appliquer la traduction sur tous ces noeuds grâce à la fonction textToDino()
 */
const textNodes = Array.from(document.querySelectorAll('p')).map(getTextNode).flat()

