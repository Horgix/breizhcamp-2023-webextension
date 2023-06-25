const inputTextSelectors = document.querySelector('input[name=text_selectors]')
const inputTitleSelectors = document.querySelector('input[name=title_selectors]')

function handleOptions ({ target }) {
    chrome.storage.local.set({
        [target.name]: target.value
    })
}

inputTextSelectors.onchange = handleOptions
inputTitleSelectors.onchange = handleOptions

chrome.storage.local.get({ text_selectors: 'p', title_selectors: 'h1, h2' })
    .then(data => {
        inputTextSelectors.value = data.text_selectors
        inputTitleSelectors.value = data.title_selectors
    })
