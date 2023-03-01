'use strict';

/*
PALINDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.

1. chiedo all'utente di inserire una parola tramite prompt;
2. creo una funzione:
    - inserisco lettera per lettera la parola all'interno di un array;
    - stampo l'array prima in ordine crescente e poi in ordine descrescente;
    - se i valori sono uguali avrò una parola polindroma, sennò no.
    */

const word = prompt('inserisci una parola');
const topOrder = Array.from(word);
const bottomOrder = [];

for(let i = topOrder.length - 1; i >= 0; i--) {
    bottomOrder.push(topOrder[i]);
};

if (topOrder.join() === bottomOrder.join()) {
    alert('la parola inserita è palindroma');
} else {
    alert('la parola inserita non è palindroma');
};