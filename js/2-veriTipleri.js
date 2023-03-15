// veri tipler
// String integer boolean double float ... number
// String
let value = "Mert";
// integer number
value = 12;
// double number 
value = 23.4;
// boolean
value = true;
value = false;
// String
value = "true";

//null
value = null;
value = 'test';
let harf = value.charAt(0);

console.log(typeof harf, " => ", harf);

//indefined
let a;
let sayi = 25;
console.log(typeof sayi)
console.log(typeof a, " => ", a);

console.log(typeof value, " => ", value);
console.log("***************************")
    // referansa dayalı 
let listem = [1, 2, 78, 98, 23];
console.log(typeof listem, " => ", listem);



let Personel = {
    isim: "Melek",
    meslek: "IT"
}
console.log(typeof Personel, " => ", Personel);

let maasHesap = function() {
    console.log("selam JavaScript")
}

console.log(typeof maasHesap, " => ", maasHesap);

console.log("***************************")

let sayi1 = 15;
let sayi2 = sayi1;
sayi1 = 36;
console.log("sayi1 = ", sayi1);
console.log("sayi2 = ", sayi2);

console.log("***************************")

let sayilarim1 = [1, 2, 3, 4, 5];
let sayilarim2 = sayilarim1;
sayilarim1[3] = 96;
sayilarim1[2] = 72;

sayilarim1 = [21, 32];


console.log("sayilarim1 = ", sayilarim1)
console.log("sayilarim2 = ", sayilarim2)

console.log("***************************")

// BigInt
// integer , double ,float (number ) => +(2^53-1) ile - (2^53-1) => -9007199254740991 ,ile +9007199254740991

const sayi3 = BigInt(90071992547409915558888);
console.log(sayi3)

console.log("***************************")