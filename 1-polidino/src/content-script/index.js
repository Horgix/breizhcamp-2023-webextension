/*
 * Based on https://github.com/mdn/webextensions-examples/tree/main/emoji-substitution
 */

let replacements = new Map()
replacements.set(new RegExp('Macron', 'gi'), 'T-Rex')
replacements.set(new RegExp('Borne', 'gi'), 'Vélociraptor')
replacements.set(new RegExp('Darmanin', 'gi'), 'Oviraptor')
replacements.set(new RegExp('Schiappa', 'gi'), 'Tricératops')



function replaceText (node) {
    if (node.nodeType === Node.TEXT_NODE) {

      // Because DOM manipulation is slow, we don't want to keep setting
      // textContent after every replacement. Instead, manipulate a copy of
      // this string outside of the DOM and then perform the manipulation
      // once, at the end.
      let content = node.textContent;

      console.log('Replacing in ' + content)
  
      // Replace every occurrence of 'word' in 'content' with its emoji.
      // Use the emojiMap for replacements.
      for (let [regex, dino] of replacements) {
        content = content.replace(regex, dino);
      }
  
      // Now that all the replacements are done, perform the DOM manipulation.
      node.textContent = content;
    }
    else {
      // This node contains more than just text, call replaceText() on each
      // of its children.
      for (let i = 0; i < node.childNodes.length; i++) {
        replaceText(node.childNodes[i]);
      }    
    }
}

replaceText(document.body);

/* Amélioration possible :
 * Ajouter un mutationObserver qui permettra de relancer le remplacement automatique dès que le DOM est modifié
 */