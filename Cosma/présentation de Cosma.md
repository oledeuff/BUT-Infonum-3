---
marp: true
theme: default
paginate: true
---

<style>
/* Global styles */
section {
  color: #333;
  background-color: #e6f7ff;
}

/* Title slide */
section[data-marpit-section="1"] {
  background-color: #b3e0ff;
  color: #003366;
}

/* Headings */
h1, h2, h3 {
  color: #00509e;
}

/* Links */
a {
  color: #0073e6;
  text-decoration: underline;
}

/* Lists */
ul, ol {
  list-style: inside square;
}

/* Slide transitions */
section.marpit-slide > section[data-marpit-transition-parsed="slide"] {
  transition: transform 0.3s ease;
}

/* Footer note */
footer {
  color: #666;
  font-size: 0.7em;
}
</style>

# Présentation du Logiciel Cosma
Olivier Le Deuff.
*Licence CC By*
2023
![bg right 100%](./cosma-logo.png)

---

# À propos de Cosma

---

## Historique

Cosma a été créé pendant le programme de recherche [HyperOtlet](https://hyperotlet.hypotheses.org/) (2017-2022; numéro de subvention ANR-17-CE38-0011). Il a été imaginé par Arthur Perret, dans le cadre de sa recherche doctorale sous la direction de Bertrand Müller et Olivier Le Deuff, et développé par Guillaume Brioudes.

---

## Otletosphere

En 2018 et 2019, Olivier Le Deuff a dirigé un projet de cartographie nommé [Otletosphere](https://hyperotlet.huma-num.fr/otletosphere/),
Une première version a été développé par Jean David étudiant en master 2 DNHD, puis une versin 2 développée par Guillaume  Brioudes alors étudiant en *LP MIND* qui est un peu l'ancêtre du *BUT 3 Infonum*.
![bg right 120%](otletosphere.JPG)

---

## Point de départ

En 2020, Arthur a défié Guillaume de construire un prototype basé sur le code source d'Otletosphere pour visualiser sa documentation de recherche sous forme de réseau interactif. C'est le point de départ de ce qui est devenu Cosma.
Il s'agit donc d'une *innovation ascendante* non prévue initialement dans le programme de recherche.

---

## Le Nom de "Cosma"

Nous avons emprunté le nom "Cosma" à **Cosma Rosselli**, l'auteur d'un *Thesaurus artificiosæ memoriæ* (1579), que nous pouvons traduire approximativement par "trésor de mémoire artificielle" - une manière poétique de décrire une aide à la mémoire.
La référence à ce travail est décrite notamment par *Umberto Eco* dans son ouvrage *De l'arbre au labyrinthe.*

---

## Outils de rédaction non linéaires

Il existe de nombreux outils de rédaction non linéaires, y compris une récente vague d'"outils pour la pensée" qui utilisent la visualisation, tels que [Roam](https://roamresearch.com/) et [Obsidian](https://obsidian.md/).

---

## Qu'est-ce que Cosma?

La plupart de Cosma est constituée d'idées et de techniques préexistantes (hypertexte, visualisation graphique, backlinks...), avec deux choix peu communs qui définissent l'identité du programme.

---

## Ce n'est pas un éditeur de texte

Premièrement, Cosma n'est pas une application de prise de notes. Il n'y a pas d'éditeur de texte. Cosma ne lit que les fichiers et génère une visualisation de ces fichiers et de leurs connexions.
- Mais il est compatible avec des éditeurs de notes de type *markdown* comme *Zettlr* qui a été le modèle de base et qui est le logiciel conseillé pour travailler avec Cosma.

---

## Une application dans une application

Le choix peu commun que nous avons fait concerne l'architecture de Cosma. En tant qu'utilisateur, vous installez un programme appelé `cosma`, qui a une interface en ligne de commande. Vous utilisez ensuite ce programme pour générer un fichier HTML, le *cosmoscope*, qui se comporte comme une application autonome.

---

## Pour qui est-ce?

Cosma est une interface pour des données de type *wiki*, la présentant d'une manière qui aide à analyser, synthétiser et partager l'information. Tout travail de connaissance qui implique de décrire des choses et les relations entre elles peut utiliser Cosma.
La philosophie reste la même depuis le début de l'otletosphère : relier la *fiche* au *graphe*.

---

## Licence

Cosma est disponible gratuitement, et son code est librement réutilisable sous les conditions autorisées par la [*licence GNU GPL 3.0*](https://www.gnu.org/licenses/quick-guide-gplv3.fr.html)

---

## Pour citer Cosma
Si vous utilisez Cosma dans un projet, pensez-à le citer surtout si vous documentez votre travail :
- Arthur Perret, Guillaume Brioudes, Clément Borel, & Olivier Le Deuff. (2021). Cosma. Zenodo. [https://doi.org/10.5281/zenodo.5920615](https://doi.org/10.5281/zenodo.5920615)

---
# Utilisations courantes

Cosma peut être utilisé par des enseignants, étudiants, chercheurs, bibliothécaires, designers, journalistes... Tout travail de connaissance impliquant la description des choses et des relations entre elles peut utiliser Cosma.

---


# À propos des exemples


Les exemples interactifs sont appelés "cosmoscopes". Ce sont des fichiers HTML autonomes, donc ils peuvent être partagés et utilisés tels quels : vous avez seulement besoin d'un navigateur web pour les ouvrir.
Ils sont donc faciles également à héberger.

---
## Création d'un glossaire hypertextuel

Un glossaire peut être une ressource inestimable pour les nouveaux venus et les professionnels établis dans n'importe quel domaine, fournissant un vocabulaire partagé avec des définitions.

![bg right 100%](https://cosma.arthurperret.fr/img/glossary-backlink.png)


---


## Étudier un réseau de relations sociales


Lorsque vous travaillez sur un sujet, vous commencez souvent par une liste, puis passez soit à des tableaux (dans un tableur, une base de données) soit à des diagrammes (comme des cartes mentales).


![bg right 100%](https://cosma.arthurperret.fr/img/otletosphere-spreadsheet.png)


---


## Recherche sur un sujet complexe


La recherche implique généralement de rassembler des matériaux, de prendre des notes à leur sujet et de forger de nouvelles idées.


![bg right 100%](https://cosma.arthurperret.fr/img/algoj-concept.png)


---


## Un outil pour la connaissance


Cosma encourage le *travail de connaissance*. Classifiez les choses en utilisant des types et des mots-clés : Cosma vous donnera des moyens de navigation (couleurs, filtres). Engagez-vous avec des concepts et de la littérature : Cosma vous donne des rétroliens contextualisés pour vous rappeler des idées passées, vous aidant à créer de nouvelles idées.

---
# Le Projet AlgoJ
[Visitez le graphe AlgoJ](http://www.culturedel.info/cosmoscope.html)
![bg right 100%](./algoJ.JPG)

---

# La Pagèsphère
[Visitez le graphe de Robert Pagès](https://oledeuff.github.io/Pagesphere/pagesphere.html)
![bg right 100%](./pagès.JPG)

---

# L'osintosphère
[Visitez le graphe des acteurs de l'OSINT](https://oledeuff.github.io/Osintosphere/osintosphere.html)
![bg right 100%](./bellingcat.JPG)

---

# Le penduloscope
[Visitez le graphe du Pendule de Foucault d'Umberto Eco](https://oledeuff.github.io/Penduloscope/pendule.html)
![bg right 100%](./pendule.JPG)

---

# Le But infonum
[Visitez le graphe du But infonum](https://oledeuff.github.io/BUT-Infonum-3/graphe.html)
![bg right 100%](./but3.jpg)

---

# Le graphe E3D
[Visitez le graphe de l'axe E3D du MICA](https://graphlab-fr.github.io/e3d/E3D.html)
![bg right 100%](./e3d.JPG)

---

# Projet Open Data Sphère
[Visitez le projet Open Data Sphère avec les étudiants d'infonum](https://oledeuff.github.io/BUT-Infonum-3/opendata.html)
![bg right 100%](./opendata.JPG)

---
# La médiasphère
Issue des données du Monde Diplomatique.
*Work in progress*
![bg right 100%](./mediasphere.JPG)

---

# Références et crédits

- Eco, Umberto. *De l’arbre au labyrinthe. Études historiques sur le signe et l’interprétation*. Grasset, 2010. 978-2-246-74851-9.
- Perret, Arthur. [*About Cosma*](https://cosma.arthurperret.fr/about.html)
- Perret, Arthur.[*Examples*](https://cosma.arthurperret.fr/examples.html)
