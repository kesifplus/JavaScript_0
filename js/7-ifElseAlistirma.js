// bir ogrencinin vize ve final notu olsun
// vizenin yuzde 40 finalin yuzde 60 baz alınarak
// ortalama notu 50 altında ise kaldınız diyecek

// vize ve final notu random olusturulacak
// 0.000  0.9999999999
// 000.00  99.99999
let vizeNotu = Math.random() * 100
vizeNotu = Math.round(vizeNotu)

let finalNotu = Math.random() * 100
finalNotu = Math.round(finalNotu)

let ortalama = vizeNotu * 0.4 + finalNotu * 0.6

if (ortalama >= 50) {
    console.log("Tebrikler sinifi gectiniz Notunuz = ", ortalama)
} else {
    console.log("Dersten kaldiniz butte gorusmek uzere Notunuz = ", ortalama)
}

// 90 ile 100 arasında AA 90 dahil
// 80 ile 90 arasında BA  80 dahil 
// 70 ile 80 arasında BB  70 dahil
// 60 ile 70 arasında CB  60dahil
// 50 ile 60 arası CC      50 dahil
// 50 altı FF 

if (ortalama >= 90 && ortalama <= 100) {
    console.log("AA ile gectiniz")
} else if (ortalama >= 80 && ortalama < 90) {
    console.log("BA ile gectiniz")
} else if (ortalama >= 70 && ortalama < 80) {
    console.log("BB ile gectiniz")
} else if (ortalama >= 60 && ortalama < 70) {
    console.log("CB ile gectiniz")
} else if (ortalama >= 50 && ortalama < 60) {
    console.log("CC ile gectiniz")
} else {
    console.log("FF ile kaldiniz")
}
console.log("*******************************")
let ogrenciVize = prompt("Lutfen vize notunuzu giriniz")
ogrenciVize = parseInt(ogrenciVize)

let ogrenciFinal = prompt("Lutfen Final notunuzu giriniz")
ogrenciFinal = parseInt(ogrenciFinal)

let ogrenciOrtala = ogrenciVize * 0.4 + ogrenciFinal * 0.6

if (ogrenciOrtala >= 90 && ogrenciOrtala <= 100) {
    console.log("AA ile gectiniz")
} else if (ogrenciOrtala >= 80 && ogrenciOrtala < 90) {
    console.log("BA ile gectiniz")
} else if (ogrenciOrtala >= 70 && ogrenciOrtala < 80) {
    console.log("BB ile gectiniz")
} else if (ogrenciOrtala >= 60 && ogrenciOrtala < 70) {
    console.log("CB ile gectiniz")
} else if (ogrenciOrtala >= 50 && ogrenciOrtala < 60) {
    console.log("CC ile gectiniz")
} else {
    console.log("FF ile kaldiniz")
}

console.log("ogrenci Ortalama ", ogrenciOrtala)