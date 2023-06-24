export default async function translateToDinos (node) {
    const res = await chrome.runtime.sendMessage({ type: 'translate_to_dinos' })
    console.log('res:', res)
    if (res) {
        node.textContent = res
        return 1
    }
    return 0
}
