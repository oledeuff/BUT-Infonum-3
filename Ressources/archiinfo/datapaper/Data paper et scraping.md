# Data paper et scraping

Il faut toujours identifier le jeu de données, repérer les formats disponibles et surtout sa *structure*.
Les formats disponibles permettent de savoir comment effectuer l'importation tandis que la structure est essentielle pour réaliser des *requêtes* précises. La connaissance de la structure revient à une bonne connaissance de la typologie et des *métadonnées* utilisées et notamment le nom exact de la métadonnée sans quoi vos requêtes peuvent ne pas fonctionner y compris lorsque vous utilisez ChatGpt 4.

Exercice ** Bordeaux Métropole**

Importer des données de Bordeaux Métropole dans Google Sheets
1. Obtenir l'URL du fichier CSV :
Rendez-vous sur la page du dataset : to_eqbat_s
Cliquez sur l'onglet Exporter situé en haut à droite.
Dans le menu déroulant, copiez l'URL associée à l'option CSV.
2. Importer les données dans Google Sheets :
Ouvrez un nouveau document Google Sheets. Nommer le 'scraping BM"
Sélectionnez la cellule A1.
Entrez la formule suivante, en remplaçant URL_DU_CSV par l'URL que vous avez copiée à l'étape précédente :
```
=IMPORTDATA("URL_DU_CSV")
```
Appuyez sur Entrée. Vous devez obtenir les données mais elles sont mal rangées. On a simplement récupérer les données sans qu'elles soient réparties dans des colonnes. Les séparateurs des fichiers de Bordeaux Métropole contiennent des points virgules.  On va donc le préciser après avoir supprimé la requête précédente :
```
=ARRAYFORMULA(SPLIT(IMPORTDATA("URL_DU_CSV"), ";"))
```
Les deux autres méthodes sont tout simplement de télécharger le fichier et de l'ouvrir dans votre tableur ou d'effectuer une requête d'importation avec un langage comme Python idéalement sur un carnet de type jupyter.
Dans le cas précédent, la solution avec le csv donne de meileurs résultats.
3. Ajustez les données si nécessaire :
Une fois les données importées, vous pourriez avoir besoin de redimensionner certaines colonnes pour mieux visualiser les informations.
la première étape est d'obtenir un tableur lisible pour l'oeil humain. Il faut donc distinguer les métadonnées en mettant des polices ou des couleurs différentes par exemple.
Vous pouvez également utiliser d'autres fonctions de Google Sheets pour trier, filtrer ou analyser les données selon vos besoins.

Les bons réflexes :
Il faut noter au fur et à mesure ce qu'on est en train de faire pour s'en souvenir et surtout pour qu'on puisse voir la différence entre le fichier initial récupéré, et le fichier de données qui a subi des curations et des transformations.
Il faut donc pour cela ouvrir un document de type texte à côté. Vous pouvez utiliser un traitement de texte ou un google doc mais l'idéal sera d'utiliser rapidement des outils qui gère le format *markdown*.
Certains éditeurs sont disponibles également en ligne.
Le fait de documenter les opérations permet aussi aux autres de savoir ce qui a été effectué.
Le versioning de Google Sheets reste intéressant mais il est préférable de prendre en charge soi-même cette gestion notamment car vous pouvez travailler sur d'autres types de tableur.

Il peut être précieux parfois de faire des copies du document que l'on est en train de modifier pour pouvoir revenir à des étapes précédentes ou parce qu'on a décidé de produire deux versions différentes du document pour répondre à des questions et objectifs distincts. Le mieux est d'utiliser les onglets et de les nommer pour montrer les évolutions produites, ça permet d'avoir une versioning organisé. 

# Mise en garde sur le travail en collectif
Il n'est pas si simple de travailler en mode synchrone sur un tableur notamment quand on fait des opérations de tri.
Il faut donc toujours prévenir qu'on va faire une opération de ce type sous peine de provoquer des catastrophes. Il importe donc de savoir *communiquer en temps réel* sur ce qu'on souhaite faire.


Comprendre quelles questions il est possible de poser 

Produire des résultats, éventuellement offrir une visualisation des résultats et savoir les interpréter



Conclure en précisant les réutilisations possibles du set de données transformé ou augmenté.

