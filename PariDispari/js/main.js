'use strict';

/*
PARI E DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

--PARI E DISPARI--
1. chiedo all'utente di scegliere pari o dispari tramite prompt;
2. chiedo all'utente di scegliere un numero da 1 a 5 tramite prompt;
3. creo una funzione che generi un numero random per il computer;
4. creo una funzione che sommi i due numeri;
5. creo una funzione che stabilisca se la somma dei due numeri sia pari o dispari utilizzando una condizione con l'operatore modulo %;
6. stampo il vincitore. */


// FUNCTIONS
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

function evenOrOdd(sum) {
    if (sum%2 == 0) {
        return 'pari';
      } else {
        return 'dispari';
      }
    };

// SCRIPT
const userChoice = prompt('scegli tra pari e dispari');
console.log(userChoice);
const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
const cpuNumber = getRandomInt(5);
console.log(userNumber);
console.log(cpuNumber);
let sum = cpuNumber + userNumber;
console.log(sum);
console.log(evenOrOdd(sum));

if (evenOrOdd(sum) === userChoice) {
    alert('giocatore vince');
} else {
    alert('cpu vince');
};