Conférence pré-hackathon de Marcello

Pour consulter les [slides de la conférence](http://vitalirosati.net/slides/2023/conf-2023-11-29modeles.html#/title-slide)
## Introduction

les algorithmes portent et importent des *visions du monde*
L'algo n'est jamais **neutre**. Ce n'est pas parce que **ça calcule** que c'est neutre.

2 exemples seront présentés : l'algo de google (moteur de recherche) et Tinder.

Texte de Jean Guy Meunier : [*humanités numériques, humanités computationnelles*](https://www.erudit.org/fr/revues/sp/2014-sp03456/1043651ar/)

## 3 étapes :
- modèle représentationnel ou discursif
- modèle fonctionnel
- modèle physiques
Les trois étapes sont identifiables mais ne sont pas étanches car leur temporalité n'est pas totalement linéaire car on peut revenir dessus.

*Le modèle représentationnel* est juste une **description dans une langue naturelle de quelque chose**.
On peut tout modéliser : un lieu, un concept, un jeu, etc.
Les modèles ne sont pas nécessairement exhaustifs.
Ce qu'une machine fait dépend généralement d'*un modèle*.
Tout est potentiellement calculable, *computable* à partir d'un modèle fonctionnel qui peut être un modèle réduit ou incomplet.
Par exemple, une phrase de ce type :
>Proust est un grand écrivain

est déjà un modèle très réduit. Par contre, si je décris le modèle sur 80 pages, j'ai déjà un modèle plus complet.
Si on prend *Tinder*, il existe un modèle de l'amour qui est décrit dans un brevet qui parle plutôt de 'match'. Il s'agit d'un modèle parmi d'autres des modèles de représentation de l'*amour*.
A chaque fois qu'un modèle commence, il commence par une *description*. La description est toujours **située*.
Par exemple :
> l'amour est la possibilité pour un homme et une femme de bien vivre ensemble

Qui se rapproche de la description de Tinder contient des formes et des représentations qui sont situées même si elles peuvent s'appuyer sur des statistiques.

La seconde étape est alors la transformation du discours du modèle représentationnel en **modèle fonctionnel**. L'objectif est de le transformer en *unités atomatiques* discrètes et de définir des fonctions pour les traiter. On est au niveau de la **représentation mathématique d'un discours sur le monde**.
La base est d'abord d'identifier une unité. Cela suppose des choix théoriques. Par exemple, on peut représenter la salle avec des pixels et selon la granularité mobilisée, cela va changer la représentation possible.
Le concept de **fonction** est essentielle. Une fonction est une *opération qui met en relation un élément d'un domaine ou plusieurs avec un seul élement d'un co-domaine*.
Il y a un input: des chiffres. et un output.
Exemple : une fonction booléenne.
deux inputs différents peuvent avoir le même output. Par exemple, le résultat est faux.
exemple : + 2 est une fonction. l'output diffère tout le temps. Sauf si on multiplie par 0.

La modélisation est alors de transformer ce discours en **unités** qu'il est possible de traiter en **fonctions**.
Pour l'amour, c'est plus compliqué évidemment que l'exemple du temps que va mettre une voiture pour parcourir tant de de KM.
Exemple ici :
Andréa et Camille. A et C ont une série de caractéristiques:
C1 : Amour de la culture. note de 0 à 10 par exemple André aime la lecture (6) et André adore la lecture (8)
Idem pour l'implication politique où on peut également mettre également un score.
Le but est alors de calculer la fonction du niveau d'amour qui relie A et C par un calcul des différences caractéristiques pondérées.

La troisième étape est l'étape informatique avec l'implémentation du **modèle physique** dans une logique de machine de Turing réelle.
Le **calculable** devient **computable**.
Turing a été le maître de l'interrogation de savoir s'il était possible de modéliser et notamment de montrer qu'**on peut toujours passer de l'étape 1 à l'étape 3**. TOut ce qui est calculable devient automatiquement computable.
La machine de Turing est une machine idéale qui sert d'identité abstraite.

Le modèle physique cependant ne correspond pas exactement au modèle du début. TOut est potentiellement computable mais on sort de l'idéal. Les limites sont mêmes parfois liées aux modèles abstraits et pas seulement au modèle physique.
La représentation mathématique du monde a été une question essentielle durant le 20ème siècle et on a abouti que certains problèmes ne sont pas totalement calculables : **théorème de Gödel**.

## Où se situe l'algorithme.

origine liée à **Al-Kwaritzmi** qui est un des fondateurs de l'algèbre.
Souvent on évoque la métaphore de la recette. A chaque étape, il est possible de connaître l'instruction suivante. Les instructions doivent être non ambigües.
Si l'instruction n'est pas assez implicite, l'algorithme va buguer. SI on suit l'instruction, on arrive à une nouvelle instruction qui demande l'arrêt.

La machine de Turing a une petite tête qui peut écrire ou ne pas écrire. Elle est idéalement infinie avec un support infini.
Logique de la base 2. Transformation du cacul décimal en **base binaire** en 0 et 1.
Cette base est plus facile pour une machine et cela limite le risque d'erreurs et de confusions.
Le pb est que cela nécessite plus de place pour faire le calcul. Les premiers **ordinateurs mécaniques** fonctionnaient de cette manière avec les rubans perforés.
L'exception vient des méthodes des **ordinateurs quantiques** qui permettent plus d'état et donc offre plus de calculs possibles.
Pour comprendre comment fonctionne une [machine de Turing](https://interstices.info/comment-fonctionne-une-machine-de-turing/)

## L'implémentation de visions du monde
 - ce sont des modèles, des algorithmes, des formats, des protocoles.
 - ce sont des modèles basés sur des valeurs.
 - ils reproduisent voire renforcent ces valeurs.
 - on est dans des logiques de **prophétie autoréalisatrice.**
    exemple du modèle de Netflix : l'algorithme a de plus en plus raison si vous acceptez ses recommandations.

## Les machines morales.

Travail de Dominique Cardon. Article D. Cardon, Dans l'esprit de [Page Rank](https://shs.hal.science/hal-00826208/)
Cardon dit que le **Page Rank** est une **machine morale**.
A la base, une recherche liée à la connaissance, dans la recherche de la pertinence, inspirée par les concepts et méthodes de la scientométrie : *Science Citation Index* d'Eugène Garfield de 1962. Les critères retenus sont le nombre de citations générées par les articles publiés. Le nombre des citations est considéré comme une forme de *votes exprimés.*
Dans le Page Rank, il s'agit de *links*. On va aller chercher la qualité non pas à l'intérieur (le document lui-même ou à l'intérieur de la communauté) mais au contraire en s'appuyant sur l'externe. Le présupposé est basé sur *l'honnêteté de la citation*.
Ce modèle est une vision parmi d'autres. Or au bout d'un certain temps, nous finissons par **naturaliser** le modèle en l'utilisant sans distance.

## Tinder

Nous n'avons pas l'algorithme.
Mais ils ont breveté un **modèle discursif** aux USA. Ils ont ainsi indirectement breveté des éléments sexistes et racistes.
Le modèle calcule un score d'**attractiveness** en fonction des interactions générées.
Il donne des points sur l'intelligence en analysant tout ce qui a été écrit.
tinder prétend s'appuyer sur les données statistiques qui est celle de la société.
Le pdg de TInder répond que ce n'est pas lui le coupable, mais le modèle statistique qui a inspiré l'algorithme.
Le pb c'est que ces valeurs finissent par s'imposer même si vous ne les partagez pas obligatoirement.

Episode de *Black mirror* : **Hang the Dj** modèle : l'amour est une force d'attraction qui dépasse toutes les autres forces. (Phèdre de Planton)
le modèle est donc celui de la résistance à toutes les contraintes.

## Conclusion

Ne lassons pas nos idées aux GAFAM.
Notamment avec des modèles moins opaques, avec des définitions non ambigües.








