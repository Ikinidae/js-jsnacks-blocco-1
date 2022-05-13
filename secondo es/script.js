// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri (generati come prima), stampiamo nell’id rosso i numeri dispari e in verde i numeri pari;

const listaNum = [];

const red = document.getElementById("rosso");
const green = document.getElementById("verde");

for (let i=1; i<=20; i++) {
    const num = Math.floor((Math.random() * 1000) + 1);
    listaNum.push(num);
    if (num % 2 == 0) {
        green.innerHTML += num;
    } else {
        red.innerHTML += num;
    }
}

console.log(listaNum);

