---
marp: true
theme: default
paginate: true
footer: "BUT Infonum 3"
class: lead
style: |
  /* ====== Palette & base (VERT lisible) ====== */
  :root{
    --bg:#f7fff7;
    --ink:#0d1f0d;
    --muted:#466b46;
    --primary:#1f7a1f;    /* Vert principal */
    --primary-2:#2f9e44;  /* Vert moyen */
    --panel:#ffffff;
    --accent:#e6ffe6;
  }

  section {
    position: relative;
    font-family: "Helvetica","Arial",system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Noto Sans",sans-serif;
    color: var(--ink);
    background: var(--bg);
    background-image: radial-gradient(var(--accent) 1px, transparent 1px);
    background-size: 28px 28px;
    padding: 72px 64px 88px; /* top | left/right | bottom */
    line-height: 1.45;
  }

  /* Classe lead (appliquée globalement par Marp) */
  .lead {
    background-color: var(--bg);
    color: var(--ink);
  }

  /* Titres */
  h1, h2, h3, h4, h5, h6 { line-height: 1.2; margin: 0 0 14px; }
  h1 {
    color: var(--primary);
    font-size: 46px;
    text-align: center;
    text-transform: uppercase;
    border: 4px solid var(--primary-2);
    border-radius: 12px;
    padding: 14px 16px;
    background: #f1fff1;
    box-shadow: 0 2px 0 #d9f7df;
    margin-bottom: 18px;
  }
  h2 {
    color: var(--primary-2);
    font-size: 34px;
    border-bottom: 3px dashed var(--primary);
    padding-bottom: 6px;
    margin-top: 10px;
  }
  h3 { color: var(--primary); font-size: 24px; text-transform: uppercase; letter-spacing: .3px; }
  h4 { color: var(--muted); font-size: 18px; text-transform: uppercase; letter-spacing: .2px; }

  /* Texte & listes */
  p { margin: 8px 0 12px; }
  ul, ol { margin: 6px 0 12px; padding-left: 1.1em; }
  li { margin: 6px 0; }

  /* Liens */
  a { color: var(--primary); font-weight: 600; text-decoration: none; }
  a:hover { color: var(--primary-2); text-decoration: underline; }

  /* Blocs & code */
  blockquote {
    font-style: italic;
    color: var(--ink);
    background: #effaf0;
    border: 3px solid var(--primary-2);
    border-radius: 14px;
    padding: 14px 16px;
    margin: 18px 0;
    box-shadow: 4px 4px #cfeecd;
  }
  pre, code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
  }
  pre {
    background: #eef7ee;
    border: 2px solid var(--primary);
    border-radius: 8px;
    padding: 10px 12px;
    font-size: .9em;
    overflow: auto;
  }

  /* Images (taille gérée via directives Marp dans le contenu) */
  img { display: block; margin: 8px auto; height: auto; }

  /* Aides (sans modifier la pagination Marp) */
  section.part    { padding-top: 96px; padding-bottom: 96px; }
  section.tight   { padding-top: 56px; padding-bottom: 64px; }
  section.wide    { max-width: 1200px; margin: 0 auto; }
  section.note    { background: #fff; }

  /* Option : masquer la pagination d’une slide précise si besoin */
  section.no-paginate::after { display: none !important; }
---

# Introduction au Data Paper
BUT INFONUM 2025  
Olivier Le Deuff — CC BY

![width:22%](https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png)

---

## Qu'est-ce qu'un Data Paper ?

> Un **data paper** est un document qui décrit un ensemble de données : collecte, traitement, contenu, structure, conditions de réutilisation, potentiel d’usage, et éléments de qualité. Son objectif est de **partager** et **rendre citables** des *données de recherche*.

---

## Pourquoi le Data Paper est-il important ?

- Favorise la **transparence** et la **reproductibilité**
- Encourage le **partage** et la **réutilisation**
- Augmente la **visibilité** (citations, impact)
- Donne une **reconnaissance académique** au travail de collecte, curatelle et documentation

---

## Définition du data paper

- Projet **DoRANum** : le data paper est un **article scientifique** à part entière (2017).
- But : rendre les jeux de données *accessibles*, *interprétables* et *réutilisables* (**FAIR**).
- Ce n’est **pas** un lieu de débat scientifique sur les résultats.
- Focus sur les **quoi, où, pourquoi, comment et qui** des données.

> Logique **FAIR** : [Findable, Accessible, Interoperable, Reusable](https://en.wikipedia.org/wiki/FAIR_data)

---

## « Raw data is an oxymoron » (Gitelman, 2013)

- La **donnée** n’existe pas “en soi”
- C’est une **construction** :
  - expliciter l’**origine** et la **méthode**,
  - permettre la **compréhension** et la **vérification**,
  - faciliter la **réutilisation** (tout ou partie).

---

## Vision des SHS vs STM

- **STM** (*Sciences, Technique & Médecine*) : data paper souvent bref et descriptif (≤ ~10 pages).
- **SHS** : écrit d’accompagnement plus narratif, contextualisation plus **expressive**.
- Objectif commun : **accompagner la réutilisation** (compréhension, évaluation, limites).  
*(Kembellec & Le Deuff, 2022)*

---

## Évaluation des données

- **STM** : Qualité corrélée à la qualité instrumentale/expérimentale.
- **SHS** : Données comme **productions d’observations**/d’interprétations situées.
- Distinction **data / capta** (ce qui est “pris”/construit) et **data / sublata**.
- Nécessité d’une **contextualisation** riche (protocoles, biais, limites).

---

## Tradition littéraire des SHS

- Écrits plus **prolixes** et **contextualisés**.
- Data paper en SHS : **construction** dans les canons de la discipline.
- Décrire méthodes, **droits de réutilisation**, **forces/limites**, périmètre.
- Valoriser le **travail invisible** (ingénieurs, documentalistes, data stewards).

---

## Contexte et Méthodologie

- **Contexte** : projet, terrain, période, équipe, contraintes.
- **Méthodes** : collecte/sélection (protocoles, instruments, critères).
- **Techniques numériques** : algorithmes, logiciels, versions.
- **Notebook** / annexe méthodologique si pertinent.
- **Accès** (URL, dépôt, licences) et **citation** des données.

---

## Métadonnées et Principes FAIR

- **Métadonnées** : décrire pour **retrouver**, **comprendre**, **réutiliser**.
- **FAIR** :
  - *Findable* : DOI, identifiants persistants, indexation.
  - *Accessible* : modalités d’accès (authentification/embargo/API).
  - *Interoperable* : formats ouverts, vocabulaires, schémas.
  - *Reusable* : licences claires, provenance, qualité.
- Lien avec **Web sémantique** (ontologies, vocabulaires contrôlés).

---

## Plan d'un data paper (selon Gay, 2021)

1. **Contexte & résumé** : données, contexte scientifique, usages potentiels.  
2. **Méthodes** : processus pour la **reproductibilité**.  
3. **Fichiers de données** : description structurée (format, variables, taille).  
4. **Validité des données** : contrôles/analyses de qualité.  
5. **Notes d’usage** : prérequis, scénarios de réutilisation, limites.  
6. **Disponibilité du code** : dépôt, version, exécution.

---

## Le contenu d'un data paper selon DoRANum

- Consulter : https://doranum.fr/data-paper-data-journal/contenu-data-paper_10_13143_8r3d-k505/
- Si l’affichage embarqué n’est pas possible (PDF), **donner le lien** en ressources.

---

## Documenter aussi le code

- Mentionner les **scripts** (langage, version, libs).
- Fournir un **lien vers le dépôt** et un **README**.
- Exemple (Python) :

```python
import pandas as pd

data = pd.read_csv('data_paper_example.csv')
print(data.head())
```

---

## Data Paper à la RSFSIC

La rubrique **data paper** de la *Revue de la société française des sciences de l'information et de la communication (RSFSIC)* contribue à la diffusion et la reconnaissance des efforts de **collecte** et de **documentation** des données.

---

## Open Data et Data Paper

- **Open Data** : données librement accessibles et réutilisables.
- Rôle du **data paper** : **documentation détaillée** et citabilité.
- Bénéfices : **interopérabilité**, **transparence**, **impact sociétal**.

---

## Licences & aspects juridiques / éthiques

- **Licences** : CC0 / CC BY / ODbL… (adapter au type de données).
- **RGPD & données personnelles** : anonymisation, minimisation, consentement, DPD.
- **Données sensibles / Éthique** : protocoles, comités, restrictions de partage.
- **Droits tiers** : droits d’auteur, bases de données, marques.

---

## Checklists pratiques

- ✅ DOI, dépôt pérenne, versionnage  
- ✅ Métadonnées complètes (schéma choisi explicitement)  
- ✅ README d’ensemble + README par fichier si besoin  
- ✅ Licences données & code, conditions d’accès  
- ✅ Tests de réutilisation (scripts d’exemple, notebook)  
- ✅ Contacts (auteur·ices, affiliation, ORCID)

---

## Outils pour réaliser un Data Paper

![width:60%](tools.png)

Éditeurs, gestion bibliographique, environnement de code, dépôts…

---

## Rédaction en Markdown

- **Éditeur** : **Zettlr** pour la rédaction fluide.  
  ![width:12%](Zettlr.png)
- **Éditeur de code** : **Visual Studio Code** (extensions Markdown).  
  ![width:12%](visualstudio.jpg)
- **Format universel** : le [**Markdown**](https://daringfireball.net/projects/markdown/) se convertit en de multiples formats.

---

## Carnet Jupyter

- **Analyse interactive** : code + résultats + texte.
- **Documentation intégrée** : notebooks reproductibles.
- **Alternatives** :
  - [**Colab** (Google Colaboratory)](https://colab.research.google.com/)
  - [**Noteable**](https://noteable.io)

![width:12%](colab.png) ![width:12%](./noteable.png)

---

## Tenir à jour et organiser sa bibliographie

- **Zotero** (groupes, partages, export).  
- Intégration **Zettlr ↔ Zotero** via **Better BibTeX** (styles CSL, citations).

![width:18%](zotero.jpg)

---

## Intégration des données sur Zenodo

- **Archivage pérenne** & **DOI** par version.
- Déposer : données, métadonnées, **licence**, **README**, **code** si possible.

![width:22%](./img/zenodo.jpg)

---

## Où publier un data paper ?

- **Data journals** dédiés (disciplinaires ou généralistes).
- **Rubriques “data”** de revues existantes (ex. RSFSIC).
- Lien avec le **dépôt** (Zenodo, HAL, entrepôts disciplinaires).
- Vérifier : **portée**, **politique de licence**, **exigences de métadonnées**.

---

## Conclusion

Le **data paper** : un levier pour la **transparence**, la **réutilisation** et la **reconnaissance** du travail de données.  
Son extension à d’autres domaines (éducation, data journalisme, administrations, ONG) repose sur des **principes communs** : documentation, traçabilité, ouverture raisonnée.

---

## Crédits et bibliographie

- **DoRANum.** *Le contenu d’un data paper*.  
  https://doranum.fr/data-paper-data-journal/contenu-data-paper_10_13143_8r3d-k505/
- **Gay, V.** (2021). *Un data paper en SHS : Pourquoi, pour qui, comment ?*  
  https://hal.science/hal-03434216
- **Gitelman, L.** (2013). *Raw Data Is an Oxymoron*. MIT Press.  
  https://doi.org/10.7551/mitpress/9302.001.0001
- **Kembellec, G., & Le Deuff, O.** (2022). *Poétique et ingénierie des data papers*. RFSIC, 24.  
  https://doi.org/10.4000/rfsic.12938
