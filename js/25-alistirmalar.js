// call by value

let sayi1 = 25;
let sayi2 = sayi1;
console.log(sayi1);
console.log(sayi2);

console.log("********");
sayi1 = 36
console.log(sayi1);
console.log(sayi2);
console.log("********");

// call by referance
let listem1 = [15, 12, 32]
let listem2 = listem1
console.log("listem1 ", listem1);
console.log("listem2 ", listem2);
console.log("****************");
listem1.push(72)
console.log("listem1 ", listem1);
console.log("listem2 ", listem2);
listem2.pop()
console.log("listem1 ", listem1);
console.log("listem2 ", listem2);
console.log("****************");

let listem3 = [15, 25, 36, 85]

let listem4 = []
listem3.forEach(element => {
    listem4.push(element)
});
console.log("listem3 ", listem3);
console.log("listem4 ", listem4);
console.log("****************");
listem3.push(98)
console.log("listem3 ", listem3);
console.log("listem4 ", listem4);
console.log("****************");

let listem5 = [...listem4]

console.log("listem4 ", listem4);
console.log("listem5 ", listem5);
console.log("****************");
listem4.push(98)
console.log("listem4 ", listem4);
console.log("listem5 ", listem5);

function ekranyaz() {
    console.log("ekrana yaz");
}
let goster = function() {
    console.log("gosterdi");
}

let info = () => {
    console.log("bilgiler geldi");
}

function getMyList() {
    return [25, 14, 36]
}

let getMyList1 = () => [25, 14, 36]

ekranyaz()
goster()
info()
let myList = getMyList()
console.log(myList);
console.log("************");
let myList1 = getMyList1()
console.log(myList1);