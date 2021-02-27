
// Prendo i chilometri e l'età della persona
var km = parseInt(prompt("Inserisci i km che devi percorrere:"));
var eta = parseInt(prompt("Qual è la tua età?"));
var prezzoKm = 0.21;

// Cacolo valore biglietto senza sconti
var totBiglietto = km * prezzoKm;

// Calcolo gli sconti
var sconto20 = totBiglietto * 20 / 100;
var totBigliettoSconto20 = totBiglietto - sconto20;
var sconto40 = totBiglietto * 40 / 100;
var totBigliettoSconto40 = totBiglietto - sconto40;

// Questo alert si attiva nel caso in cui l'età o i km non siano numeri
if (isNaN(eta) || isNaN(km)) {
	alert("I dati che hai inserito non sono corretti. Riprova.");
}

/* Tipi di sconti applicabili:
*
* - prezzo normale
* - 20% di sconto
* - 40% di sconto
*
*/

else {
	if (eta <= 18) {
		alert("Il prezzo del tuo biglietto è di: " + totBigliettoSconto20 + "€. Sconto 20%");
	} else if (eta >= 65) {
		alert("Il prezzo del tuo biglietto è di: " + totBigliettoSconto40 + "€. Sconto 40%");
	} else {
		alert("Il prezzo del tuo biglietto è di: " + totBiglietto + "€. Sconto non applicabile");
	}
}
