// Math
// sqrt bir sayının karekokunu verir
let value = Math.sqrt(25);
value = Math.sqrt(36)
value = Math.sqrt(54)

// pow  uslu sayılarda kullanılır
// ilk parametre taban, ikinci paremetre ustur
value = Math.pow(3, 4) // 3^4 = 81
value = Math.pow(8, 3)

//abs bir sayinin mutlak degerini verir
value = Math.abs(5)
value = Math.abs(-500)

// ceil kendinden sonraki ilk sayıya yuvarlar
value = Math.ceil(25.2)
value = Math.ceil(25.6)

//floor ondalıklı degeri siliyor tam sayı degerini alıyo
value = Math.floor(35.9)
value = Math.floor(28.4)

//round methodu sayı tabana yakın ise tabana yuvarlar tavana yakın ise tavana yuvarlar
value = Math.round(34.4)
value = Math.round(54.6)

// min parametre olarak verilen sayılardan en kucugunu verir
value = Math.min(8, 89, 78, 15)

// max parametre olarak verilen sayılardan en buyugunu verir
value = Math.max(8, 89, 78, 15)

//random  0 ile 1 arasında sayı uretir
value = Math.random() * 100
value = parseInt(value)

console.log("value = ", value)