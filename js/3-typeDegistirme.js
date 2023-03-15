let value = 15;
//yontem 1
value = "true";
value = String(3.14);
value = String(89);
value = String(true);

value = String([1, 2, 3]);
value = String(function() { console.log("first") });

// yomtem 2
value = (27).toString();
value = ([1, 2, 3]).toString();

//yonte 3
value = 34 + "";
value = 36;
value = 1255
value = value.valueOf()
console.log("veri Tipi = ", typeof value, " deger =", value)

/*
    let deger = "selam " + 46;
    console.log(deger)
*/
//yontem 1
value = Number("123");
value = Number("selam")
value = Number(null)
value = Number([1, 2, 3])
value = Number(function() { console.log("first") })
value = Number("3.78")


// yontem 2
value = parseInt("123");
value = parseInt("selam");

//float

value = parseFloat("123.5");


//console.log("veri Tipi = ", typeof value, " deger =", value)