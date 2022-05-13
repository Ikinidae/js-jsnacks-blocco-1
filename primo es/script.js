const listaNum = [];

const array = document.getElementById("array");

for (let i=1; i<=10; i++) {
    const num = Math.floor((Math.random() * 1000) + 1);
    listaNum.push(num);
}

array.innerHTML += listaNum;