let sayi1 = 15;
console.log(typeof sayi1);
// number bir degeri stringe parse(cevirme)
// yontem 1
console.log("" + sayi1);
console.log(typeof sayi1);
sayi1 = sayi1 + ""
console.log(typeof sayi1);
console.log("*****yontem 2*****");
// yontem 2
let sayi2 = 34;
console.log(typeof sayi2);
sayi2 = String(sayi2)
let sayi4 = String(36.5)
console.log(typeof sayi4);
console.log(sayi4);
console.log("***");
console.log([12, 14, 25]);
let sayi5 = String([12, 14, 25])
console.log(typeof sayi5);
console.log(sayi5);
console.log("*****yontem 3 *****");
let sayi6 = 18
sayi6 = sayi6.toString();
console.log(typeof sayi6);

console.log("**********stringi numbera parse etme****************");

let value = "36"
console.log(value, typeof value);
console.log("********yontem 1*****");
value = Number("25")
value = Number("25.5")
value = Number(null)
    //value = Number([25, 12, 36])
    //value = Number("veysi")
value = Number("65.5")
console.log(value, typeof value);
console.log("********yontem 2*****");
let deger = parseInt("145")
deger = parseInt("25.76")
    //deger = parseInt("selam")
console.log(deger, typeof deger);

console.log("**********string float parse etme****************");

deger = parseFloat("123")
deger = parseFloat("12.5")
    //deger = parseFloat("melek")
console.log(deger, typeof deger);