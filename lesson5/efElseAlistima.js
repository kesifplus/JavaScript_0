// bişr ogrencinin vize ve final notu olacak 
// vize ve final notları 0 ile 100 arasında random uretilecek
/// vizenin %40 finalin %60 alınacak
// notu 50 altı olanlar kaldı denecek
// notu 50 ile 70 arsında olanlar BB ile gececek
// notu 70 ile 100 arasında olanlar AA ile gececek
let vizeNotu = Math.random() * 100
vizeNotu = Math.round(vizeNotu)

let finalNotu = Math.random() * 100
finalNotu = Math.round(finalNotu)

console.log("vize", vizeNotu)
console.log("fiinal", finalNotu)

let dersNotu = vizeNotu * (40 / 100) + finalNotu * (60 / 100)
dersNotu = Math.round(dersNotu)
console.log("dersNotu", dersNotu)
    /*

    if(dersNotu<50){
        console.log(dersNotu +  " notu ile kaldiniz")
    }
    // 50<=dersNotu<70
    // true true
    if(dersNotu>=50 && dersNotu<70){
        console.log(dersNotu +  " notu ile BB aldiniz")
    }

    // 70<=dersNoru<=100
    if(dersNotu>=70 && dersNotu<=100){
        console.log(dersNotu +  " notu ile AA aldiniz")
    }

    */


if (dersNotu < 50) {
    console.log(dersNotu + " notu ile kaldiniz")
} else if (dersNotu >= 50 && dersNotu < 70) {
    console.log(dersNotu + " notu ile BB aldiniz")
} else if (dersNotu >= 70 && dersNotu <= 100) {
    console.log(dersNotu + " notu ile AA aldiniz")
} else {
    console.log("hatali girdi")
}