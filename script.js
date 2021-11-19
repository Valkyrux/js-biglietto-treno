// cartella/repo js-biglietto-treno
// Descrizione
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Finito l’esercizio base, cercate di capire se potete semplificarlo

const pricePerKm = 0.21;
let travelLength = parseInt(prompt("Inserisci la lunghezza del percorso in km:"));
let price = travelLength * pricePerKm;
const adultEta = 18;
const oldManEta = 65;
let userEta = parseInt(prompt("Inserisci la tua età:"));
let discount = 0;
if (userEta < adultEta) {
    discount = price * 0.2;
} else if (userEta > oldManEta) {
    discount = price * 0.4;
}
price = price - discount;

// conversione a prezzo umano (metodo brutale). problema di questo metodo, se l'ultima cifra decimale è 0 non la stampa
// price = Math.floor(price * 100 + 0.5) / 100;

// conversione a prezzo umano (metodo ez)
price = price.toFixed(2);

document.getElementById("price").innerHTML = price + ' ' + document.getElementById("price").innerHTML;