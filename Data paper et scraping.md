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
