import { sendMessageToBackground } from './utils'

export default async function translateToDinos (node) {
    const res = await chrome.runtime.sendMessage({ type: 'translate_to_dinos' })
    if (res) {
        node.textContent = res
    }
}
