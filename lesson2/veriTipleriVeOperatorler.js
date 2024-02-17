// short, integer, bigInt (number) tamsayi
// duoble, float => (number) ondalık sayılar
// string => kelimeler cumller (tırnak ile gosterilir)
// boolean => true ve false
// null
// undefined 

let sayi = 15;
sayi = 23.5
console.log(typeof sayi);
console.log(sayi);
console.log("******************");
let kelime = "selam"
console.log(kelime);
console.log(typeof kelime);
let isim = "mehmet"
console.log("******************");

let durum = true
durum = false
console.log(durum);
console.log(typeof durum);

console.log("******************");
let deger = "true"
console.log(deger);
console.log(typeof deger);
console.log("******************");
let yas = null
console.log(yas);
console.log(typeof yas);
console.log("******************");
let maas;
console.log(maas);
console.log(typeof maas);
console.log("*************************************");
console.log("*****************aritmerik işlemler********************");

console.log("********toplama*****************");
let sayi1 = 27
let sayi2 = 23
let toplam = sayi1 + sayi2
console.log(toplam);
console.log("********cikarma*****************");
let kalan = sayi1 - sayi2
console.log(kalan);

console.log("********bolme*****************");
let bolum = sayi1 / sayi2
console.log(bolum);
console.log("********carpma*****************");
let sonuc = sayi1 * sayi2
console.log(sonuc);
console.log("********mod*****************");
let kalan2 = sayi1 % sayi2
console.log(kalan2);
console.log("**************");
let firtname = "mehmet"
let surname = "kilic"
let fullname = firtname + " " + surname
console.log(fullname);
console.log("**************");

let fiyat = 25
let urun = "gomlek"
let urunFiyat = urun + fiyat
console.log(urunFiyat);
console.log("******************");
console.log("sayilarin toplami = " + sayi1 + sayi2);
toplam = sayi1 + sayi2
console.log("sayilarin toplami = " + toplam);
console.log("sayilarin toplami = " + (sayi1 + sayi2));
console.log("******************");
console.log("**************basit eşitsizlikler********************************");

// < kucuk , > buyuk, <= kucuk eşit, >= buyuk eşit
sayi1 = 27
sayi2 = 23
console.log(sayi1 > sayi2);
console.log(sayi1 < sayi2);
console.log(sayi1 <= sayi2);
console.log(sayi1 >= sayi2);
console.log("******************");
sayi1 = 15
sayi2 = 15
console.log(sayi1 > sayi2);
console.log(sayi1 < sayi2);
console.log(sayi1 <= sayi2);
console.log(sayi1 >= sayi2);
console.log("*******");
// degil operatoru
console.log(!(sayi1 > sayi2));
console.log("********** == *********************");
sayi1 = 15
sayi2 = 15
let sayi3 = "15"
console.log(sayi1 == sayi2);
console.log(sayi1 == sayi3);

console.log("********** === *********************");
sayi1 = 15
sayi2 = 15
sayi3 = "15"
console.log(sayi1 === sayi2);
console.log(sayi1 === sayi3);
console.log("********** == *********************");
let sayi4 = 23;
let sayi5 = 23;
let sayi6 = "23"
console.log(sayi4 == sayi5);
console.log(sayi4 == sayi6);

console.log(" ***********===**************");
console.log(sayi4 === sayi5);
console.log(sayi4 === sayi6);
console.log("*************************************");
console.log("*************ve && operatoru**********");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("*************veya || operatoru**********");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);