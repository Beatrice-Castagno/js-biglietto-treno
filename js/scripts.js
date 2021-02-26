var km = parseInt(prompt("Inserisci i km che devi percorrere:"));
var eta = parseInt(prompt("Qual è la tua età?"));
var prezzoKm = 0.21;

var totBiglietto =  km * prezzoKm;

if ( eta > 18 && eta < 65 ) {
alert ("Il prezzo del tuo biglietto è di: " +totBiglietto+ "€. Sconto non applicabile");
}

var sconto20 = totBiglietto * 20 / 100;
var totBigliettoSconto20 = totBiglietto - sconto20;
var sconto40 = totBiglietto * 40 / 100;
var totBigliettoSconto40 = totBiglietto - sconto40;

if ( eta < 18 ) {
  alert("Il prezzo del tuo biglietto è di: " +totBigliettoSconto20+ "€. Sconto 20%");
} else if ( eta > 65 && eta <= 100) {
 alert("Il prezzo del tuo biglietto è di: " +totBigliettoSconto40+ "€. Sconto 40%");
} else {
 alert ("I dati che hai inserito non sono corretti. Riprova.");
}
