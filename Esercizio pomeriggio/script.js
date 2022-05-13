// creo i due array
const firstArr = ["parola1-1", "parola2-1", "parola3-1", "parola4-1", "parola5-1"];
const secondArr = ["parola1-1", "parola2-1"];

const firstUl = document.getElementById("first_ul");

// ciclo for per il primo array
for (let i=0; i<firstArr.length; i++) {
    let firstCont = firstArr[i];
    let firstLi = document.createElement("li");
    firstLi.append(firstCont);
    firstUl.append(firstLi);

    let secondUl = document.createElement("ul");

    // ciclo for dentro il primo per il secondo array
    for (let j=0; j<secondArr.length; j++) {
        let secondCont = secondArr[j];
        let secondLi = document.createElement("li");
        secondLi.append(secondCont);
        secondUl.append(secondLi);
        firstLi.append(secondUl);
    }
}