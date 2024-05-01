let isimListesi = ["ali", "melis", "mehmet", "leyla"]
console.log(isimListesi[0]);
console.log(isimListesi[1]);
console.log("------for dongusu-----------------");

for (let index = 0; index < isimListesi.length; index++) {
    console.log(isimListesi[index]);
}
console.log("-------- foreach---------------");

isimListesi.forEach(function(element) {
    console.log(element);
});
console.log("----------for in-------------");

for (const key in isimListesi) {
    console.log(isimListesi[key]);
}
console.log("-------for of----------------");

for (const iterator of isimListesi) {
    console.log(iterator);
}
console.log("--------------------------------------");
console.log("-----------------while---------------------");

let sayac = 5
while (sayac > 0) {
    console.log("sayacin degeri : " + sayac);
    sayac = sayac - 1;
    // sayac-- ;
}
console.log("---------------do while-----------------------");
console.log("while dongu basladi");
sayac = 0
while (sayac > 0) {
    console.log("sayacin degeri : " + sayac);
}
console.log("while dongu bitti");

console.log("----------");

console.log("do while dongu basladi");
sayac = 0
do {
    console.log("sayacin degeri : " + sayac);
} while (sayac > 0);
console.log("do while dongu bitti");
console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("---------------objeler----------------------------");
isimListesi = ["ali", "melis", "mehmet", "leyla"]

// objeler key:value olarak tutulur
let ogrenci = {
    isim: "melek",
    soyIsim: "can",
    meslek: "IT",
    yas: 28
}
console.log(isimListesi[3]);
console.log(ogrenci.soyIsim);
console.log(ogrenci.yas);
console.log("-----------------------");
/*
// for of dongusu objelede kullanılamaz
for (const iterator of ogrenci) {
    console.log(iterator);
}
*/

//console.log(ogrenci['isim']);
for (const key in ogrenci) {
    // console.log(key);
    console.log(ogrenci[key]);
}