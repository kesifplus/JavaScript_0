let isim = "ahmet"
console.log(isim);

// referans veri tipler = array, obje

// array
let liste = ["ali", "veli", "zeynep", "merve", 123, true, "mert"]
console.log(liste);
// length = array kac karekterden olustugunu verir
console.log(liste.length);
// arraydeki 2. index deki degeri verir
console.log(liste[2]);
// arrayin son elemanını ekrana yazınız

let sonIndex = liste.length - 1;
// liste[6]
console.log(liste[sonIndex]);

liste[1] = "mehmet"
console.log(liste);

// objeler

let name = "merve"
let surename = "yildiz"
let age = 25
let job = "IT"
let salary = 70000

let name1 = "mehmet"
let surename1 = "kilic"
let age1 = 27
let job1 = "IT"
let salary1 = 60000

let personel1 = {
    "name": "Duygu",
    "surename": "demir",
    "age": 27,
    "job": "IT",
    "salary": 80000
}

let personel2 = {
    "name": "Mehmet",
    "surename": "can",
    "age": 29,
    "job": "IT",
    "salary": 90000
}
console.log(personel1);
console.log(personel2);
console.log(personel1.name);
console.log(personel1.job);
personel1.salary = 100000
console.log(personel1);

console.log("/////////////////////////////");

//let dogunGunu = "2024/05/15"
//let bugun = "2024/04/03"
let bugun = new Date();
console.log(bugun);

// bugunun yılını yazma
console.log("yil = ", bugun.getFullYear());
// tarihteki ay verir ay verirkek ocak 0 olarak kabul edilir
console.log("ay = ", bugun.getMonth());
console.log("gun =", bugun.getDate());
console.log("saat =", bugun.getHours());
bugun.setFullYear(2028)
bugun.setMonth(8)
console.log(bugun);
console.log("************************");
let tarih1 = "2012-05-22";

let d = new Date("2012-05-22");
// getDay haftanın kacıncı gunu oldugunu verir
// 0 = pazar 1 pazartesi ....6 = cumartesi
console.log(d.getDay());