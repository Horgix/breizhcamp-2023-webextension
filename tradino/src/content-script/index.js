const html = `
<h1>Ready !</h1>
<img style="width: 600px" src='${chrome.runtime.getURL('data/jurassic-park.jpg')}' />
<p>
Disneyland aussi a eu quelques difficultés à ses débuts !<br>
- Oui mais, John, quand les pirates des Caraïbes se détraquaient, ils ne dévoraient pas les touristes !<br>
<br>
-- Jurassic Parc, 1993
</p>
`
document.body.innerHTML = html