export default async function titleToDinos (node) {
    const res = await chrome.runtime.sendMessage({ type: 'translate_to_dinos' })
    if (res) {
        node.textContent = res
        return 1
    }
    return 0
}
