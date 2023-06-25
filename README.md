# BreizhCamp 2023 - Création d'extension de navigateur 
### Présenté par Florent Vuillemin et Aurélien Partiot (Orange)


## Affichage des slides

```
cd slides
docker-compose up --build -d
```
Puis ouvrir l'adresse suivante dans un navigateur : http://localhost:8000/

Alternativement, le contenu est lisible dans le fichier `markdown.md` (le mode aperçu de Visual Studio code permet de le lire aisément).

## Contenu du dépôt

| Répertoire | Contenu |
|-|-|
| `template` | L'arborescence de base permettant de construire et tester des extensions pour Chrome et Firefox |
| `content-script` | Trois extensions de base permettant de manipuler le contenu des pages web visitées. Il faut pour cela cliquer sur l'icône de l'extension dans le navigateur, **ou** autoriser l'extension à modifier toutes les pages visitées |
| `service-worker` | L'extension _tradino_ modifiée avec un `service worker` qui charge les ressources depuis un fichier JSON et répond aux demandes du `content script`
| `browser-action` | Idem avec l'ajout d'une popup qui propose plusieurs action de remplacement lorsque l'utilisateur clique sur l'icône de l'extension
| `storage` | Idem, et le `content script` stocke ses statistiques de remplacement dans le _local storage_ de l'extension
| `options-page` | Ajout d'une page de configuration de l'extension, qui affiche toutes les statistiques de remplacement à partir du _local storage_

