// Rappel sur les tableaux

// - Créer un tableau en JS
const tab = [];
const tabChiffre = [5, 3, 4, 6];
const tabTexte = ['Riri', 'Della', 'Zaza'];

console.log('Tab', tab);
console.table(tab);

console.log('Tab Chiffre', tabChiffre);
console.table(tabChiffre);

console.log('Tab Texte', tabTexte);
console.table(tabTexte);

/*****************************************************************/

// Parcourir le contenu du tableau
//  - Boucle classique 
//    while(...) { ... } 
//    do { ... } while(...);
//    for(let i = 0; ... ; i++) { ... }

console.warn('Exemple avec la boucle while avec le tableau de chiffre -> Divisible par 2');

let count = 0;

while (count < tabChiffre.length) {

    // Recuperer la valeur via l'operateur d'acces
    const val = tabChiffre[count];

    // Traitement...
    const resteDivision = val % 2;

    if (resteDivision === 0) {
        console.log(`La valeur ${val} est divisible par 2`);
    }
    else {
        console.log(`La valeur ${val} n'est pas divisible par 2`);
    }

    // Incrémenté la valeur du compteur
    count++;
};



// - Boucle pour les tableaux (Lecture seul !!!)
//   for(const element of tableau) { ... }
//   tableau.forEach((element, index) => { ... })

console.warn('Exemple de boucle for..of avec le tableau de chiffre -> Divisible par 3');

for (const chiffre of tabChiffre) {

    // Traitement... 
    const resteDivision = chiffre % 3;

    if (resteDivision === 0) {
        console.log(`La valeur ${chiffre} est divisible par 3`);
    }
    else {
        console.log(`La valeur ${chiffre} n'est pas divisible par 3`);
    }
}

/*****************************************************************/
// Modification du tableau
console.warn('Manipulation sur un tableau');

const tabModif = ['Zaza', 'Balthazar', 'Della', 'Archibald', 'Donald'];
console.log('Etat initial', tabModif);

// - Modifier le contenu via l'indice
tabModif[3] = 'Christel';
console.log('Modification', tabModif);

// - Ajouter des valeurs
tabModif.push('Jennifer', 'Nasra', 'Fifi');
console.log('Ajouter (fin)', tabModif);

tabModif.unshift('Riri', 'Eleanor');
console.log('Ajouter (debut)', tabModif);

tabModif.splice(3, 0, 'Thaïs', 'Zahra');
console.log('Ajouter (splice)', tabModif);

// - Supprimer des valeurs
tabModif.pop();
console.log('Supp le dernier', tabModif);

tabModif.shift();
console.log('Supp le premier', tabModif);

tabModif.splice(7, 1);
console.log('Supp "Donald"', tabModif);
