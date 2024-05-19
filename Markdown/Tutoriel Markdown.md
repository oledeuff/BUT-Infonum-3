# Tutoriel Markdown pour les débutants

## Qu'est-ce que Markdown ?

Markdown est un langage de balisage léger qui vous permet de formater du texte en utilisant une syntaxe simple et facile à lire et à écrire. Il a été créé par John Gruber en 2004.

## Comment utiliser Markdown ?

### Titres

Pour créer un titre, vous utilisez le symbole `#` suivi d'un espace et du texte de votre titre. Le nombre de `#` que vous utilisez déterminera le niveau du titre. Par exemple :

```markdown
# Titre de niveau 1
## Titre de niveau 2
### Titre de niveau 3
#### Titre de niveau 4
##### Titre de niveau 5
###### Titre de niveau 6
Paragraphes et sauts de ligne
Pour créer un paragraphe, écrivez simplement votre texte. Pour faire un saut de ligne, ajoutez deux espaces à la fin de la ligne.


Ceci est un paragraphe.
Ceci est un autre paragraphe.
Listes
Pour créer une liste non ordonnée, utilisez *, -, ou + suivi d'un espace et du texte de l'élément de la liste. Par exemple :


* Élément de liste 1
* Élément de liste 2
* Élément de liste 3
Pour créer une liste ordonnée, utilisez un nombre suivi d'un point et d'un espace. Par exemple :


1. Premier élément
2. Deuxième élément
3. Troisième élément
Liens
Pour créer un lien, utilisez le texte du lien entre crochets [] suivi de l'URL entre parenthèses (). Par exemple :


[Cliquez ici](http://www.example.com) pour aller sur Example.com.
Images
Pour insérer une image, utilisez un point d'exclamation !, suivi du texte alternatif entre crochets [] et de l'URL de l'image entre parenthèses (). Par exemple :


![Texte alternatif](http://www.example.com/image.jpg)
Texte en gras et en italique
Pour mettre du texte en gras, entourez-le de deux astérisques ** ou de deux tirets bas __. Pour mettre du texte en italique, entourez-le d'un astérisque * ou d'un tiret bas _. Par exemple :


**Ceci est du texte en gras.**
*Ceci est du texte en italique.*


# Tutoriel Markdown : Insérer du code

Pour insérer un bloc de code dans Markdown, vous pouvez utiliser des accents graves (```). Vous devez placer trois accents graves avant et après votre bloc de code. Par exemple :

```markdown
Ceci est un bloc de code
```

Si vous voulez spécifier le langage de programmation pour la coloration syntaxique, vous pouvez le faire en ajoutant le nom du langage juste après les trois accents graves d'ouverture.

Voici un exemple avec du code Python :

```python
def hello_world():
    print("Hello, world!")
```

Et voici un exemple avec du code R :

```R
# Ceci est un bloc de code R
v <- c(1, 2, 3, 4, 5)
mean(v)
```



Exemple : Les courses de Monsieur Borel

# Les courses de Monsieur Borel

Monsieur Borel a besoin de faire ses courses pour la semaine. Voici sa liste :

## Liste de courses

1. **Fruits et légumes**
   - [ ] Pommes
   - [ ] Bananes
   - [ ] Carottes
   - [ ] Épinards
2. **Produits laitiers**
   - [ ] Lait ou crème liquide
   - [ ] Fromage
   - [ ] Yaourts
3. **Viandes**
   - [ ] Poulet
   - [ ] Boeuf
   - [ ] Saucisses

Il doit aussi se rappeler de [commander du vin en ligne](http://www.invinoveritas.com).

![Image d'un caddie](http://www.example.com/shopping-cart.jpg)

Monsieur Borel prévoit une grosse soirée pour ses collègues et les étudiants. Il a prévu de faire à manger. Voici sa liste de plats :

## Liste de plats

- [ ] Houmous
- [ ] Frites
- [ ] Quiches

Il a aussi prévu toutes sortes de bières mais vous allez devoir apporter le dessert.
monsieur borel doit faire une quiche mais il ne sait pas combien d'oeufs il doit mettre dans son appareil sachant qu'il en met 3 d'habitudes pour 4 personnes et qu'il y en aura 30. Il met d'habitude 30 grammes de fromage rapé pour 4 personne et 40 cl de crème liquide. Il est perdu.
Voici le script python qui lui permet de calculer le tout :

```python
# Define the quantities for 4 people
eggs_for_4 = 3
cheese_for_4 = 30  # in grams
cream_for_4 = 40  # in cl

# Define the number of people
people = 30

# Calculate the quantities for the number of people
eggs = (eggs_for_4 / 4) * people
cheese = (cheese_for_4 / 4) * people
cream = (cream_for_4 / 4) * people

eggs, cheese, cream
```

*Bon courage pour vos courses et votre soirée, Monsieur Borel !*
