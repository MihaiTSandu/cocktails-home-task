# Proba interviu

Se construieste un frontend minimal in jurul API-ului

_<https://www.thecocktaildb.com/api.php>_

Tehnologiile folosite sunt la alegere: Se poate genera frontend-ul dintr-un limbaj serverside (PHP, C#, etc) sau direct din JS, inclusiv React, Angular, jQuery, etc. Pentru
HTML, un plus il reprezinta folosirea Bootstrap.
Livrabile se considera o arhiva care contine toate fisierele sursa, plus instructiuni despre cum putem rula codul local. Se accepta si rularea intr-un mediu public (ex: un
free hosting precum netlify, etc).

# Pagini care trebuie construite

## Structura aplicatie

Aplicatia va fi formata din mai multe ecrane (pagini separate sau Single Page Application, la alegere). Cerinta functionala este sa se poate naviga intre ecrane (Ex:
printr-un meniu general, prin navigare mai intai la home page, breadcrumbs, etc)

## Preluarea datelor

Trebuie consumat API-ul _<https://www.thecocktaildb.com/api.php>_ pentru a prelua datele, in mod dinamic. Pentru apeluri din frontend, se poate folosi orice
librarie existenta: axios, fetch, ajax, etc.

## Ecranul 1

Ecranul contine un input de tip text si un buton de search.
Userul introduce numele unui cocktail in input si apasa butonul de search.
La apasarea acestuia, se apeleaza API-ul pentru a cauta toate cocktailurile care contin acel string in nume.
Se foloseste endpointul [Search cocktail by name] www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
Se iau datele, se afiseaza intr-o lista (doar numele cocktail-ului).
La click pe un cocktail din lista de rezultate, in pagina, sub lista, se randeaza descrierea completa a cocktailului ales.
Descriere inseamna:

1. Textul retetei (se preia din campul strInstructions )
2. Poza retetei (aflta in campul strDrinkThumb )
3. Lista de ingrediente: poate fi doar o concatenare, nu e nevoie sa fie o lista. Se preiau denumirile din campurile strIngredientX si pentru fiecare ingredient
   se afiseaza in paranteza si cantitatea (preluata din campurile strMeasureX )

**Note:**
Atentie, cautarea poate fi si intermediara, nu doar dupa numele complet al cocktailului. Ex: La cautarea dupa stringul "mar" se obtin si Martini si Margarita. Se afiseaza
in lista ambele cocktailuri, si se randeaza reteta pentru cocktailul ales din lista.
Daca exista un singur rezultat, reteta se afiseaza automat, fara sa se mai dea click. Daca nu exista niciun rezultat, se afiseaza un mesaj user-friendly.

**Bonus points:**
Se filtreaza cocktailurile din lista si dupa proprietatea strAlcoholic (care poate fi 'Alcoholic' sau 'Non alcoholic' ). Userul are la dispozitie o bifa
(checkmark), care reprezinta tipul de cockatil cautat.

## Ecranul 2

Se afiseaza o lista cu toate ingredientele posibile. Acestea vin din apelul: [List the categories, glasses, ingredients or alcoholic filters]
www.thecocktaildb.com/api/json/v1/1/list.php?i=list
Userul selecteaza mai multe ingrediente, apasa un buton de cautare, si se obtine o lista cu toate cocktailurile care contin toate ingredientele alese de user.
Note:

1. Modul de selectie al ingredientelor este la latitudinea candidatului.
2. Pentru cautarea pe baza de ingredient, se poate folosi doar apelul [Search by ingredient] www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

**Bonus points:**
Se afiseaza, pe langa lista de posibile ingrediente dorite, si o lista de posibile ingrediente nedorite (de ex: ingrediente la care userul este alergic). Aceasta lista are tot
selectie multipla.
Rezultatul trebuie sa fie o lista cu toate cocktailurile disponibile care contin: - Toate ingredientele dorite de user - Niciunul din ingredientele nedorite.
