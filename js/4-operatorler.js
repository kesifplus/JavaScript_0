// toplama +
let sayi1 = 15;
let sayi2 = 5;
console.log("sayilarin toplami = ", sayi1 + sayi2)

// cıkarma -
console.log("sayilarin farki = ", sayi1 - sayi2)

// bolme operaror /

console.log("sayilarin bolumu = ", sayi1 / sayi2)

// carpma *

console.log("sayilarin carpimi = ", sayi1 * sayi2)

let sayi3 = 15 / 6
console.log(sayi3)

let value = parseInt(sayi3);
console.log(value)
console.log("**************")

//  % operatoru bir sayinin bir sayiya bolumunden kalani veri
console.log(25 % 3)

let durum = true

// < operatoru bir sayının bir sayıya kucuk olup olmadıgı kontrol eden operatordur
console.log("24 < 99 ", 24 < 99)
console.log("15 < 5", 15 < 5)
console.log("10 < 10", 10 < 10)

console.log("***********************")

// > operatoru bir sayının bir sayıdan buyuk olup olmadıgı kontrol eden operatordur

console.log("25>8", 25 > 8)
console.log("12>78", 12 > 78)
console.log("5>5", 5 > 5)

console.log("***********************")

// <= operatoru bir sayının bir sayıya kucuk veya esir olup olmadıgı kontrol eden operatordur
console.log("24 <= 99 ", 24 <= 99)
console.log("15 <= 5", 15 <= 5)
console.log("10 <= 10", 10 <= 10)

console.log("*****************")

// >= operatoru bir sayının bir sayıdan buyuk olup olmadıgı kontrol eden operatordur

console.log("25>=8", 25 >= 8)
console.log("12>=78", 12 >= 78)
console.log("5>=5", 5 >= 5)
console.log("*****************")

// == kıyaslama operatoru bir degerin digere eşit olup olmadıgını soyleyen operatordur
// == operatoru sadece degeri karşılaştırır veri tipine bakmaz
console.log("5 == 5 ", 5 == 5)
console.log("6 == 50 ", 6 == 50)
console.log("asli == asli ", "asli" == "asli")
console.log("Asli == asli ", "asli" == "Asli")
console.log("Asli == asli ", "Asli".toLowerCase() == "asli".toLowerCase())
console.log("50" == 50)

console.log("*********************")

// === kıyaslama operatoru bir degerin digere eşit olup olmadıgını soyleyen operatordur
// === operatoru sadece degerin eşitligine bakmaz veri tipi eşitligini kontrol eder
console.log("50" === 50)
console.log(55 === 55)


// ! degil operatorudun bir degerin degilini alır( tersini) veya degil kontoru yapar

console.log("15 == 15 ", 15 == 15)
console.log("15 != 15 ", 15 != 15)

durum = false
console.log(!durum)

console.log("*********************")

// && ve operator

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log("************")
sayi1 = 5
sayi2 = 10
sayi3 = 8

// true && true
console.log((sayi1 < sayi2) && (sayi1 < sayi3))

// true && false
console.log((15 <= 15) && (25 < 5))

console.log("*********************")

//  || veya operatoru
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false
console.log("***********")

// false || true
console.log((123 <= 15) || (25 < 50))