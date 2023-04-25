console.log("selam javaScript");
// yorum satiridor

/*
yorum satırı
blogudur
*/
console.log("selam");
console.warn("warn")
console.error("error")

// var let const
var isim = "mert"
var isim = "asli"
isim = "melis"
console.log(isim);

let soyisim = "yildiz"
soyisim = "kilic"
console.log(soyisim);
// const ile tanımlana degişkenler guncellenemez
const yas = 25
const pi = 3.14
    //pi = 36
console.log(yas);
const listem = [25, 36, 45]
listem.push(78)
    // const ile tanımlana degişkenler guncellenemez
    //listem = [15, 36, 45]
console.log(listem);
console.log("*****************");
// ders 2 veri tipleri
// string
let value = "aylin"
    // number
value = 36
console.log(value, typeof value);
// undefined
let sayi;
// true veya false deger alan boolean
sayi = false
console.log(sayi, typeof sayi);

let durum = null
console.log(durum, typeof durum);

let notlar = [96, 56, 78, 63]
console.log(notlar, typeof notlar);


let ogrenci = {
    isim: "aysel",
    not: 96
}
console.log(ogrenci, typeof ogrenci);

let sayiOndalik = 36.5
console.log(sayiOndalik, typeof sayiOndalik);

// ders3 tip degistirme 

let deger = "25"
deger = Number(deger)
console.log(deger, typeof deger);


let deger2 = 36
deger2 = String(deger2)
console.log(deger2, typeof deger2);
console.log("*************");

// ders4 operatorler
let isci = {
    sicilNo: 123456,
    birimi: "Teknik Servis",
    uzmanlik: ["ag yonetimi", "It"]
}

let sicil = isci.sicilNo;
let birim = isci.birimi;
let uzman = isci.uzmanlik;


let { sicilNo, birimi, uzmanlik } = isci;

console.log(sicil);
console.log(birim);
console.log(uzman);
console.log("************");
console.log(sicilNo);
console.log(birimi);
console.log(uzmanlik);

let bugun = new Date();
console.log(bugun)