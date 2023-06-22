import { sendMessageToBackground } from './utils'

export default async function translateToDinos (node) {
    const res = await sendMessageToBackground(
        'translate_to_dinos',
        { text: node.textContent }
    )
    if (res) {
        node.textContent = res
        document.translatedTitle++
    }
}
