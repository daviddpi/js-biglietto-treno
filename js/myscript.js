var chilometriPercorrere = parseInt( prompt("Inserisci i km da percorrere") );
var etaPasseggero = parseInt( prompt("Inserisci l'età del passegero") );

var centisimiAlKm = 0.21;
var prezzoTotale = centisimiAlKm * chilometriPercorrere;

var scontoAnziani= (prezzoTotale * 40) / 100;
var scontoGiovani= (prezzoTotale  *20) / 100;

console.log("Età passegero:" + etaPasseggero);
console.log("Chilometri da percorrere:" + chilometriPercorrere);
console.log("Prezzo senza sconto:" + prezzoTotale);
console.log("Sconto anziani:" + scontoAnziani);
console.log("Sconto giovani:" + scontoGiovani);

var prezzoFinale = prezzoTotale;

if(etaPasseggero==Number.isNaN){
    alert("Errore, deve essere un numero!")
}

if(etaPasseggero >= 65){
    prezzoFinale = prezzoTotale - scontoAnziani
} else if(etaPasseggero < 18){
    prezzoFinale = prezzoTotale - scontoGiovani;
}

var prezzoArrotondato = Math.round((prezzoFinale + Number.EPSILON) * 100) / 100;
console.log("In base all'età e ai km il prezzo totale è:" + prezzoArrotondato +"€");