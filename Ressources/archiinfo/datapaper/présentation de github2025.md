---
marp: true
theme: default
class: lead
paginate: true
style: |
  /* ====== Thème sobre + "barre GitHub" fonctionnelle sans <header> ====== */
  :root{
    --bg:#ffffff;
    --ink:#0f1115;
    --muted:#586069;
    --gh:#24292e;     /* GitHub header */
    --gh-accent:#f9826c;
  }

  section {
    font-family: "Helvetica","Arial",system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Noto Sans",sans-serif;
    color: var(--ink);
    background: var(--bg);
    padding: 72px 64px 88px;
    line-height: 1.45;
  }

  /* Barre "header" réutilisable : mettre un blockquote tout en haut de la slide */
  section blockquote.banner {
    margin: -12px -16px 18px -16px; /* étire un peu */
    padding: 14px 18px;
    background: var(--gh);
    color: #fff;
    border-left: 6px solid var(--gh-accent);
    border-radius: 8px;
    box-shadow: 0 2px 0 #00000012;
  }
  section blockquote.banner p { margin: 0; }
  section blockquote.banner img { vertical-align: middle; width: 38px; margin: 0 8px 0 0; display:inline-block; }
  section blockquote.banner strong { font-size: 1.15em; letter-spacing: .2px; }

  h1 {
    color: var(--gh);
    text-align: center;
    text-transform: uppercase;
    border: 3px solid var(--gh);
    border-radius: 10px;
    padding: 12px 14px;
    margin-bottom: 16px;
  }
  h2 { color: var(--gh); border-bottom: 2px dashed var(--gh); padding-bottom: 6px; }
  h3 { color: var(--muted); text-transform: uppercase; letter-spacing: .2px; }

  a { color: var(--gh); font-weight: 600; text-decoration: none; }
  a:hover { color: var(--gh-accent); text-decoration: underline; }

  /* Images (Marp sizing via alt: ![width:xx%]) */
  img { display: block; margin: 8px auto; height: auto; }
  .icon img { width: 42px; }

  /* Option : masquer pagination slide par slide */
  section.no-paginate::after { display: none !important; }
---

![width:50px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

# Introduction à Git, GitHub et GitHub Desktop
**BUT Infonum 2023.**  
Olivier Le Deuff — *Licence CC0*

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **GIT**
{.banner}

- Système de **contrôle de version distribué**  
- Suivi fin des **modifications** du code source  
- Facilite la **collaboration** (branches, fusions)  
- Open source (adaptations : *GitLab*, *Gitea*…)

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **GitHub**
{.banner}

- Plateforme d’**hébergement** de code basée sur Git  
- Collaboration, **pull requests**, **issues**, CI/CD  
- **Écosystème** massif (packages, actions, wikis)

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **Un réseau social de compétences**
{.banner}

- Suivre des **utilisateurs** et **projets**  
- **Stars** et **watch** pour signaler l’intérêt / suivre l’activité  
- Contributions **visibles** sur les profils

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **GitHub Desktop**
{.banner}

- Interface **graphique** pour Git  
- Gestion des dépôts, commits, branches, merges  
- Intégration directe avec **GitHub**

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **Pourquoi utiliser GitHub ?**
{.banner}

1. **Collaboration** fluide  
2. **Gestion** des versions fiable  
3. **Intégration** continue (Actions)  
4. **Documentation** (README, wiki)  
5. **Communauté** active

---

## Les fonctionnalités essentielles
*(Push & Pull)*

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **Push**
{.banner}

- Envoyer vos **modifications locales** vers le dépôt distant  
- Met à jour le **remote** avec vos derniers commits  
- Indispensable pour **partager** vos changements

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **Pull**
{.banner}

- Récupérer les **modifications distantes** vers votre dépôt local  
- Met à jour votre branche avec l’**amont**  
- Indispensable pour rester **synchronisé**

---

## Les bonnes pratiques
*(Conseils GitHub Desktop)*

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **1. Commitez régulièrement**
{.banner}

- Commits **fréquents** et **atomiques**  
- Messages **descriptifs** (impératif court)

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **2. Organisez vos branches**
{.banner}

- Branches par **feature** / **fix**  
- **Rebase** / fusion régulière avec `main` pour limiter les conflits

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **3. Synchronisez souvent**
{.banner}

- **Pull** avant de pousser de gros changements  
- Résoudre rapidement les **divergences**

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **4. Résolvez les conflits rapidement**
{.banner}

- Si conflit : **isoler**, **comparer**, **tester**  
- Garder l’historique **lisible** (commits de merge clairs)

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **5. Issues & Pull Requests**
{.banner}

- Ouvrir des **issues** pour bugs / idées  
- Passer par des **pull requests** pour discuter et valider les changements

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **Pour conclure**
{.banner}

- **Git** : contrôle de version puissant  
- **GitHub** : collaboration & hébergement  
- **GitHub Desktop** : accès graphique simple

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **Testez**
{.banner}

# Il est temps d’ouvrir votre espace *GitHub* !

---

> ![width:38px](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) **Objectifs du jour**
{.banner}

- Créer son espace **GitHub** en ligne  
- Créer son répertoire dédié sur son disque dur  
- Publier ses premières versions du **travail** (acteur de l’info)  
- Organiser **portfolio** + **architecture de l’info**  
- Inviter des personnes (optionnel)

---

## Ressources pour apprendre Git & GitHub

1. **OpenClassrooms** — cours pour débutants  
2. **GitHub Skills** (ex–Learning Lab) — tutoriels interactifs  
3. **Documentation** officielle

---

### Ressource 1 : OpenClassrooms

- **Titre** : Gérez votre code avec Git et GitHub  
- **Description** : Cours complet pour débuter  
- Lien : https://openclassrooms.com/fr/courses/2342361-gerez-votre-code-avec-git-et-github

---

### Ressource 2 : GitHub Skills

- **Description** : Tutoriels interactifs pour apprendre GitHub  
- **Note** : Pas exclusivement en français  
- Lien : https://skills.github.com/

---

### Ressource 3 : Documentation GitHub

- **Description** : Guide complet GitHub & GitHub Desktop  
- **Langues** : Dont français  
- Lien : https://docs.github.com/fr

---

## Crédits

- Aide à la mise en forme et au style : ChatGPT  
- Image d’entête : Logo GitHub  
- Licence : **CC0**  
- Version : 18 septembre 2023, revue Août 2025
