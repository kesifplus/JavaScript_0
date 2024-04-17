let isim = "ahmet"
let isim2 = "mehmet"
let isim3 = "merve"
console.log(isim[1]);
console.log(isim.charAt(1));

let listem = ["melek", "ali", "melis", "mert"]
    //listem[4]="Duygu"
console.log(listem);
console.log(listem[3]);
// push methodu arrayin sonuna elaman ekler
listem.push("Duygu")
console.log(listem);
// unshift methodu arrayin basına elaman ekler
listem.unshift("Aysegul")
console.log(listem);

// pop methodu arrayin sonundaki elaman silir
listem.pop()
console.log(listem);
// unshift methodu arrayin basındaki elaman silir
listem.shift()
console.log(listem);
console.log("*****includes******");
// includes arrayin icersinde verilen deger varmı diyebakar
// varsa true yok ise false
listem = ["melek", "ali", "melis", "mert"]
console.log(listem.includes("melek"));
console.log(listem.includes("veysel"));
console.log("***********");
// insexof methodu verilen deger var ise index numarınsı verir
// yok ise -1 degerini doner
console.log(listem.indexOf("veysel"));

console.log("****length*******");
// length arrayin kac elamandan olsutugunu veriri
console.log(listem.length);
console.log("*****************************************");
console.log("Duygu");
console.log("Duygu");
console.log("Duygu");
console.log("Duygu");
console.log("Duygu");
console.log("Duygu");
console.log("Duygu");
console.log("Duygu");
console.log("Duygu");
console.log("Duygu");
console.log("*****************************************");

for (let index = 0; index < 100; index++) {
    console.log("Duygu");
}
console.log("*****************************************");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("*****************************************");
// yontem 1 =  ekrana 1 den 5 kadar yazıdırma
let sayi = 0
for (let index = 0; index < 5; index++) {
    sayi = sayi + 1
    console.log(sayi);

}
console.log("*****************************************");
// yontem 2 =  ekrana 1 den 5 kadar yazıdırma
for (let index = 1; index < 6; index++) {
    console.log(index);
}
console.log("*****************************************");
// listem = ["melek", "ali", "melis", "mert"] 
//soru1: yukarıdaki array baz alarakk her bir elamanının alta alta yazın cıktı asagıdaki gibi olacak
//melek
//ali
//melis
//mert

//soru2: yukarıdaki array baz alarakk cıktı asagıdaki gibi olacak
//Hosgeldin melek
//Hosgeldin ali
//Hosgeldin melis
//Hosgeldin mert

//soru3: yukarıdaki array baz alarakk aratin sonuna ve basına birir isim eklenecek
// ve 2 sorunun cıktısı verilecek
//Hosgeldin melek
//Hosgeldin ali
//Hosgeldin melis
//Hosgeldin mert