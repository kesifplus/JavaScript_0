// ekran 10 defa selam Kursat

for (let index = 0; index < 10; index++) {
    console.log("selam Kursat");
}
// ekranda alt alta (0 ile 100 arası)15 sayı yazsın
//  1.sayı = 25
// 2. sayı= 36
// ..............
// 15. sayı =99
console.log("1. sayi = 15");
console.log("2. sayi = 36");
console.log("3. sayi = 16");
console.log("***********************************");
let value = 0;
for (let index = 1; index <= 15; index++) {
    // random 0 ile 1 arasında ondalıklı sayı uretir
    // bu sayıyı 100 ile carptık 0 ile 100 arasında ondalıklı deger oldu
    value = Math.random() * 100
        // round methodu ile asagı yukarı yuvarlarak tam sayı elde ettik
    value = Math.round(value)
    console.log(index + ". sayi = " + value);
}
console.log("***********************************");

// baslangıcta bos bir arrayınız olsun ve siz bu arraye  3 isim ekleyin
// ve bu arrayde ahmet ismi olup olmadıgını ekrana yazınız
let isimListesi = []
isimListesi.push("ahmet", "mehmet")
isimListesi.push("leyla")
console.log(isimListesi);
if (isimListesi.includes("ahmet")) {
    console.log("isimListesinini icersinde Ahmet degeri var");
} else {
    console.log("isimListesinini icersinde Ahmet degeri yok");
}
console.log("***********************************");
// asagıdaki cumlede kac tane e harfi vardır
let cumle = "bugun gunlerden cuma ve ben seni cok ozledim"
    /*
    console.log(cumle[0] == "e");
    console.log(cumle[1] == "e");
    console.log(cumle[2] == "e");
    console.log(cumle[3] == "e");
    console.log(cumle[4] == "e");
    console.log(cumle[5] == "e");
    console.log(cumle[6] == "e");
    console.log(cumle[7] == "e");
    console.log(cumle[8] == "e");
    console.log(cumle[9] == "e");
    console.log(cumle[10] == "e");
    console.log(cumle[11] == "e");
    */
let sayac = 0;
for (let index = 0; index < cumle.length; index++) {
    if (cumle[index] == "e") {
        sayac++;
    }
}
console.log("cumleden buluna e harfi sayisi " + sayac + " tanedir");