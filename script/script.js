const distance = prompt("Distanza da percorrere?");
const age = prompt("Età del passeggero?");
var price = distance*0.21;
if (age<18) {
    price = price*0.8
}
if (age>65) {
    price = price*0.6
}
alert("Il prezzo del biglietto è di "+price+"€");