export default async function translateToDinos (node) {
    const res = await chrome.runtime.sendMessage({
        type: 'translate_to_dinos',
        data: {
            text: node.textContent
        }
    })
    if (res) node.textContent = res
}
