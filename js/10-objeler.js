let isim = "mert"
    // referan veri tipleridi
let isimler = ["ali", "veli", "mehmet", "merve", 52]
console.log("isim = ", isim)
console.log("isimler = ", isimler)
console.log("isimler[0]  = ", isimler[0])
console.log("isim[0]  = ", isim[0])
console.log("isim.charAt(0)  = ", isim.charAt(0))

console.log("isim degişkeni veri tipi ", typeof isim)
console.log("isimler degişkenin veri tipi ", typeof isimler)

let personel = {
    isim: "melis",
    soyIsim: "kilic",
    maas: 2500
}
console.log(personel)
console.log("personel.isim =  ", personel.isim)
console.log("personel.maas =  ", personel.maas)

let ogrenci = {
    isim: "leyla",
    soyIsim: "akin",
    basarilari: ["Java", "Product Owner", "Tester"]
}
console.log("ogrenci = ", ogrenci)
console.log(ogrenci.isim)
console.log(ogrenci.basarilari)
console.log(ogrenci.basarilari[1])

let isci = {
    sicilNo: 123456,
    birimi: "Teknik Servis",
    uzmanlik: ["ag yonetimi", "It"]
}
let numara = isci.sicilNo
console.log("numara ", numara)
console.log("isci = ", isci)
    // Destructuring
let { sicilNo, birimi } = isci
console.log(sicilNo)
console.log(birimi)

// date

let bugun = new Date();
console.log(bugun)
console.log("gun ", bugun.getDate())
console.log("yil ", bugun.getFullYear())
console.log("saat ", bugun.getHours())
console.log("ay ", bugun.getMonth())
console.log("*************************")
const tarih = new Date("25 January 2023");
console.log("tarih = 25 January 2023")
console.log("gun ", tarih.getDate())
console.log("ay ", tarih.getMonth())
console.log("yil ", tarih.getFullYear())
console.log("saat ", tarih.getHours())
console.log("dakika", tarih.getMinutes())
console.log("*************************")
tarih.setFullYear(2025)
tarih.setHours(22, 15)
tarih.setMonth(8)
console.log("**********degiştrilmiş hali ***************")
console.log("gun ", tarih.getDate())
console.log("ay ", tarih.getMonth())
console.log("yil ", tarih.getFullYear())
console.log("saat ", tarih.getHours())
console.log("dakika", tarih.getMinutes())
console.log(tarih)
console.log(tarih.getTimezoneOffset())

const date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');
const date2 = new Date('August 19, 1975 23:15:30 GMT-02:00');

console.log(date1.getTimezoneOffset());
console.log(date2.getTimezoneOffset());
// Expected output: your local timezone offset in minutes
// (e.g., -120). NOT the timezone offset of the date object.

console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());