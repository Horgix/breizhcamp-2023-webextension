/*
 * Extrait de https://royaume-dinosaures.com/blogs/news/25-faits-amusants-sur-les-dinosaures
 */

const fun_facts = [
    "Le nom Vélociraptor signifie voleur rapide",
    "Le T-rex était un carnivore qui avait une morsure plus de deux fois plus puissante qu'une morsure de lion.",
    "Les dinosaures vivaient sur tous les continents, y compris l'Antarctique.",
    "Les plus gros mangeurs de plantes pesaient plus de 100 tonnes.",
    "Les dinosaures étaient des reptiles qui vivaient sur Terre d'il y a environ 230 millions d'années à environ 65 millions d'années."
]

var p = document.createElement("div");
p.textContent = fun_facts[Math.floor(Math.random() * fun_facts.length)];
p.setAttribute("class", "dinofact");

document.body.appendChild(p);
