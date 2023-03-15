let gun = "carsamba"

if (gun == 'pazartesi') {
    console.log("bugun gunlerde pazartesi")
} else if (gun == 'sali') {
    console.log("bugun gunlerde sali")
} else if (gun == 'carsamba') {
    console.log("bugun gunlerde carsamba")
} else if (gun == 'persembe') {
    console.log("bugun gunlerde persembe")
} else if (gun == 'cuma') {
    console.log("bugun gunlerde cuma")
} else if (gun == 'cumartesi') {
    console.log("bugun gunlerde cumartesi")
} else if (gun == 'pazar') {
    console.log("bugun gunlerde pazar")
} else {
    console.log("hatali gun")
}
console.log("************************")
switch (gun) {
    case 'pazartesi':
        console.log("bugun gunlerde pazartesi")
        break;
    case 'sali':
        console.log("bugun gunlerde sali")
        break;
    case 'carsamba':
        console.log("bugun gunlerde carsamba")
        break;
    case 'persembe':
        console.log("bugun gunlerde persembe")
        break;
    case 'cuma':
        console.log("bugun gunlerde cuma")
        break;
    case 'cumartesi':
        console.log("bugun gunlerde cumartesi")
        break;
    case 'pazar':
        console.log("bugun gunlerde pazar")
        break;

    default:
        console.log("hatali gun")
        break;
}

console.log("************************")
let sayi = 'persembe'
switch (sayi) {
    case 0:
        console.log("sayimiz 0")
        break;
    case 1:
        console.log("sayimiz 1")
        break;
    case 2:
        console.log("sayimiz 2")
        break;
    case 1.1:
        console.log("sayimiz 1.1")
        break;
    case true:
        console.log("sayimiz boolean true")
        break;
    case 'persembe':
        console.log("bugun gunlerde persembe")
        break;
    default:
        console.log("hatali deger")
        break;
}

// date objesi kullarak bugun hangi gun ise ekran o gun yazsın
let today = new Date();
// ayın kaçı oldugunu veriyor
console.log("today.getDate() => ", today.getDate())
    // bugun gunlerden ne
    // 0 ise pazatesi 1 ise sali .....6 ise pazar oldugunu anlıyoruz
console.log("today.getDay() => ", today.getDay())

console.log("today.getFullYear() => ", today.getFullYear())

console.log("today.getHours() => ", today.getHours())


console.log("*****************************")
    // 0 ile 6 arasında sayı vererek hangi gunde ıldugumu verecek
gun = today.getDay()
console.log("getDay", gun)
switch (gun) {
    case 0:
        console.log("bugun gunlerde pazar")
        break;
    case 1:
        console.log("bugun gunlerde pazartesi")
        break;
    case 2:
        console.log("bugun gunlerde sali")
        break;
    case 3:
        console.log("bugun gunlerde carsamba")
        break;
    case 4:
        console.log("bugun gunlerde persembe")
        break;
    case 5:
        console.log("bugun gunlerde cuma")
        break;
    case 6:
        console.log("bugun gunlerde cumartesi")
        break;


    default:
        console.log("hatali gun")
        break;
}