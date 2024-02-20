// kosullar
if (true) {
    console.log("selam Aysegul");
}
if (false) {
    console.log("selam Melek");
}

if (5 < 25) {
    console.log("5 25 den kucuktur");
}
let sayi1 = 15;
let sayi2 = 23;

if (sayi1 < sayi2) {
    console.log("sayi1 sayi2 den kucuktur");
}
if (sayi1 > sayi2) {
    console.log("sayi1 sayi2 den buyuktur");
}

if (sayi1 === sayi2) {
    console.log("sayi1 sayi2 ye esittir");
}
console.log("*******if else**********");
sayi1 = 15;
sayi2 = "15";
if (sayi1 < sayi2) {
    console.log("sayi1 sayi2 den kucuktur");
} else if (sayi1 > sayi2) {
    console.log("sayi1 sayi2 den buyuktur");
} else if (sayi1 === sayi2) {
    console.log("sayi1 sayi2 ye esittir");
} else {
    console.log("hatali bir girdi yapildi");
}

console.log("*****************");

// 25 sayisinin tek mi cift mi oldugunu bulan kodu yazınız

let sayi3 = 26
let kalan = sayi3 % 2

if (kalan != 0) {
    console.log("sayi tektir");
} else {
    console.log("sayi ciftir");
}
console.log("*************");

if (kalan == 0) {
    console.log("sayi ciftir");
} else {
    console.log("sayi tektir");
}
console.log("kalan = ", kalan);

console.log("***************");
let sayi4 = prompt("lutfen bir sayi giriniz")
sayi4 = Number(sayi4)

if (sayi4 > 10) {
    console.log("sayi4 10 dan buyuktur");
} else if (sayi4 < 10) {
    console.log("sayi4 10 dan kucuktur");
} else {
    console.log("sayi4 10 a eşittir");
}