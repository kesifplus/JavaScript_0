let isim = "veysi"
let terstenIsim = ""

for (let index = isim.length - 1; index >= 0; index--) {

    terstenIsim = terstenIsim + isim[index]
}
console.log(terstenIsim);


isim = "rahime"
terstenIsim = ""

for (let index = isim.length - 1; index >= 0; index--) {

    terstenIsim = terstenIsim + isim[index]
}
console.log(terstenIsim);


isim = "nuray"
terstenIsim = ""

for (let index = isim.length - 1; index >= 0; index--) {

    terstenIsim = terstenIsim + isim[index]
}
console.log(terstenIsim);
console.log("****************");

function terstenYazma(value) {
    terstenIsim = ""
    for (let index = value.length - 1; index >= 0; index--) {

        terstenIsim = terstenIsim + value[index]
    }
    console.log(isim, " tersten yazimi = ", terstenIsim);
}

terstenYazma("nuray")
terstenYazma("veysi")
console.log("**********");

// içerisinde int (number) barındıran array var. array içerisindeki degerlerin 
// 3 tam bolunenleri farklı bir array atan  algoritma

let listem = [12, 25, 47, 58, 93, 35, 72]
let uceBolunenler = []

for (let index = 0; index < listem.length; index++) {
    if (listem[index] % 3 == 0) {
        uceBolunenler.push(listem[index])
    }
}

console.log(uceBolunenler);
console.log("**************");

let uceBolunenlerYeni = []
listem.forEach(element => {
    if (element % 3 == 0) {
        uceBolunenlerYeni.push(element)
    }
});
console.log(uceBolunenlerYeni);
console.log("**************");
let uceBolunenlerIki = []
listem.forEach(
    function(element) {
        if (element % 3 == 0) {
            uceBolunenlerIki.push(element)
        }
    }
)
console.log(uceBolunenlerIki);
console.log("**************");

function uceTamBulunenler(gelenListe) {
    let uceBolunenler = []
    gelenListe.forEach(element => {
        if (element % 3 == 0) {
            uceBolunenler.push(element)
        }
    });
    console.log(uceBolunenler);
}
let listem1 = [122, 125, 457, 588, 993, 135, 72]
uceTamBulunenler(listem)
uceTamBulunenler(listem1)
console.log("*************");
// içerisinde int (number) barındıran array var. array içerisindeki degerlerin 
// 2 tam bolunenleri farklı bir array atan ve return eden algoritma

function ikiyeTamBolunenler(gelenListe) {
    let ikiyeBolunenler = []

    gelenListe.forEach(element => {
        if (element % 2 == 0) {
            ikiyeBolunenler.push(element)
        }
    });
    return ikiyeBolunenler
}
let ikiBolunenSayilar = ikiyeTamBolunenler(listem1)
console.log(ikiBolunenSayilar);