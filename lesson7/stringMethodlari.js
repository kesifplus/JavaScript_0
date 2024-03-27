// temlate literal

let isim = "Erdal"
let soyisim = "Kalkan"
let meslek = "Bilisim"

// isim = Erdal soyIsim= Kalkan meslek = Bilisim
let bilgiler = "isim = " + isim + "  soyIsim= " + soyisim + " meslek= " + meslek
let yenibilgi = `isim = ${isim} soyisim= ${soyisim} meslek= ${meslek}`
console.log(bilgiler);
console.log(yenibilgi);
console.log("*******************");
// charAt verilen indexdeki harfi getirir
let kelime = "bugun"
console.log("kelime degiskenindseki 2 harfi = " + kelime[1]);
console.log("kelime degiskenindeki 2 harfi = " + kelime.charAt(1));
console.log("*************");
//concat = stringlerin birlestiren method
isim = "kursat"
soyisim = "mert"
let tamIsim = isim + " " + soyisim
tamIsim = `${isim} ${soyisim}`
tamIsim = isim.concat(soyisim)
console.log("tam isim = " + tamIsim);
console.log("****************");
// toUpperCase stringdeki tum karekterleri buyuk harfe ceviririm
isim = "benim ismim duygu"
isim = isim.toUpperCase()
console.log(isim);

isim = "Benim iSmiN Duygu"
isim = isim.toLowerCase()
console.log(isim);

//
// 6 index = g 14. index =n
// slice ve substring 2 parametre alır 1. paramete baslangıc 2. paremetre bitis aralıgını verir
kelime = "bugun gunlerden carsamba"
console.log(kelime.slice(6, 15));

console.log(kelime.substring(6, 15));
// substr 1. paramete baslangıc 2 parametre baslangıctan itibare bu kader karekter al
console.log(kelime.substr(2, 5));
// - sondan 3 karekter alır
console.log(kelime.slice(-3));

console.log("****************");
// trim stringin basındaki ve sonundaki boslukları kaldırır
isim = "  kursat  "
isim = isim.trimStart()
isim = isim.trimEnd()

isim = "  kursat  "
isim = isim.trim()
console.log(isim.length);
console.log(isim);

console.log("****************");
// replace methodu ilk gordugu degeri degistirir tek degisiklik yapar sonrasına bakmaz
let cumle = "bugun gunlerden carsamba ve ben carsamba gunu maca gidecem"
cumle = cumle.replace("carsamba", "persembe")
console.log(cumle);

console.log("*********************");
cumle = "bugun gunlerden carsamba ve ben carsamba gunu maca gidecem"
cumle = cumle.replaceAll("carsamba", "persembe")
console.log(cumle);
console.log("*********************");
// indexOf methodu stringde parametre olarak verilen deger var ise baslangıc indexsini verir
// yok ise -1 degeri verir
cumle = "fenerbahce galatasaray"
console.log(cumle.indexOf("ver"));
console.log("*********************");

cumle = "fenerbahce galatasaray besiktas"
    //startsWith cumle verilen deger ile mi baslıyor sorusuna true veya false ile cevap verir
console.log(cumle.startsWith("fenerbahce"));
console.log(cumle.endsWith("besiktas"));
console.log("*********************");
cumle = "fenerbahce galatasaray besiktas"
let url = "www.google.com.tr/api/user/id"
    // ["fenerbahce","galatasaray","besiktas"]
console.log(cumle.split(" "));
let urlArray = url.split("/")
console.log(urlArray[0]);