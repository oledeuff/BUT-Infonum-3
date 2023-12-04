---
marp: true
paginate: true
---

<style>
  /* Définir les polices, les couleurs et les styles de base */
  :root {
    --color-primary: #0055aa; /* Couleur primaire */
    --color-secondary: #f0f0f0; /* Couleur secondaire */
    --color-background: #ffffff; /* Couleur de fond */
    --color-text: #333333; /* Couleur du texte */
    --font-family-sans-serif: 'Helvetica Neue', Arial, sans-serif;
    --font-family-serif: 'Times New Roman', serif;
    --font-family-monospace: 'Courier New', monospace;
  }

  /* Appliquer les styles de base à la présentation */
  section {
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: var(--font-family-sans-serif);
  }

  /* Styliser les titres */
  h1, h2, h3, h4, h5, h6 {
    color: var(--color-primary);
  }

  /* Styliser les liens */
  a {
    color: var(--color-primary);
    text-decoration: underline;
  }

  /* Styliser les blocs de code */
  code {
    font-family: var(--font-family-monospace);
    background-color: var(--color-secondary);
  }

  /* Styliser les citations */
  blockquote {
    border-left: 4px solid var(--color-primary);
    padding-left: 1em;
    font-style: italic;
  }

  /* Ajouter des styles spécifiques pour les diapositives de titre */
  section.title-slide {
    background-color: var(--color-primary);
    color: var(--color-secondary);
    text-align: center;
  }

  /* Styliser le pied de page */
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.5em;
    background-color: var(--color-secondary);
    text-align: center;
    font-size: 0.8em;
  }

  /* Arrière-plan légèrement transparent pour le texte */
  section {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
  }
</style>



# Gestion d’un projet en Architecture de l’information

Olivier Le Deuff
*Licence CC by*
But Infonum 3
*Crédit images : Dall-E*
![bg right](./gestionpro.png)

---

## Sources

- Voir le Chapitre de *JMS* dans l’ouvrage francophone
- Voir aussi les explications dans le *polar bear*, version consultable en ligne

---

## Cinq dimensions dans le projet

1. **Fonctionnelle** : Répondre à un besoin
2. **Technique** : Respecter les spécifications et les contraintes de mise en œuvre.
3. **Organisationnelle** : Prendre en compte le mode de fonctionnement de l'organisation.
4. **Temporelle** : Respecter les échéances.
5. **Financière** : Respecter les limites du budget.

---

## Logique du changement

- Des méthodes agiles
- Savoir faire coopérer...

---

## Les 5 étapes

1. Reformulation de la commande et organisation du travail
2. Analyse
3. Proposition de scénarios
4. Finalisation de la solution
5. Implémentation et évaluation

---

### 1. Reformuler la demande

- Comprendre les besoins exprimés
- Les traduire en besoins réalisables techniquement
- Expliciter, montrer, démontrer, faire évoluer, proposer, influencer, faciliter…
![bg right](./reformulation.png)

---

### Maîtrise d’ouvrage/Maîtrise d’oeuvre

- Séparation des concepts de maîtrise d'oeuvre et de maîtrise d'ouvrage
- Importance de la collaboration dans le processus de conception

---

### L’équipe projet

- Représentants qualifiés pour chaque expertise technique
- Le chef de projet doit s’entourer des expertises complémentaires indispensables

---

### Une double logique

- **Organisationnelle** : Gestion d’équipe et responsabilités
- **Opérationnelle** : Tâches à réaliser selon les expertises

---

### Un comité de pilotage

- Suivi et prise de décision
- Prise en compte de tous les acteurs et métiers

---

## 2. Analyse, les 3 domaines (Morville, Rosenfeld)

- **Contexte** : Objectifs d’affaires, financements, culture organisationnelle
- **Contenu** : Types de documents, métadonnées, volume de données
- **Utilisateurs** : Types de public, tâches, comportements de recherche

---

### Précisions sur l'analyse

- L'analyse du contexte doit être ciblée et efficace
- Ne pas confondre analyse de l'institution et analyse du contexte

![bg right](./analyse.png)

---

## Appréciation des ressources

- Création de valeur
- Exemples de grilles d'analyse et de diagnostic

---

## 3. Rédiger les scénarios

- Scénarios d'usage pour différents types d'usagers
- Vérification de la cohérence avec des tests d'usage
![bg right](./scenario.png)

---

## 4. Prototyper

- Utilisation d'outils de maquettage
- Idéaliser, formaliser, rationaliser, expérimenter
![bg right](./finalisation.png)
---

## 5. Implémenter et évaluer

- Passage en mode « bêta » avec des testeurs
- Ouverture progressive de la solution
- Importance de l'évaluation pour les corrections finales

![bg right](./evaluation.png)
