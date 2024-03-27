// bir degisken olacak ve icesinde haftanın gunu olacak
// gun icersinde deger neyse ekranda 
// by gun gunlerde sali dir

let gun = 'persembe'
    //console.log("bu gun gunlerden " + gun + "dir");

if (gun == 'pazartesi') {
    console.log("bugun gunlerden pazartesidir e hafta ici bir gundur");
} else if (gun == 'sali') {
    console.log("bugun gunlerden salidir e hafta ici bir gundur");
} else if (gun == 'carsamba') {
    console.log("bugun gunlerden carsambadir e hafta ici bir gundur");
} else if (gun == 'persembe') {
    console.log("bugun gunlerden persembedir e hafta ici bir gundur");
} else if (gun == 'cuma') {
    console.log("bugun gunlerden cumadir e hafta ici bir gundur");
} else if (gun == 'cumartesi') {
    console.log("bugun gunlerden cumartesidir e hafta sonu bir gundur");
} else if (gun == 'pazar') {
    console.log("bugun gunlerden pazardir e hafta sonu bir gundur");
} else {
    console.log("hatali bir girdi lutfen kucuk harfler ile haftanin gununu yaziziniz");
}
console.log("*******************************");
gun = 'cuma'

switch (gun) {
    case 'pazartesi':
        console.log("bugun gunlerden pazartesidir e hafta ici bir gundur");
        break;
    case 'sali':
        console.log("bugun gunlerden salidir e hafta ici bir gundur");
        break;
    case 'carsamba':
        console.log("bugun gunlerden carsambadir e hafta ici bir gundur");
        break;
    case 'persembe':
        console.log("bugun gunlerden persembedir e hafta ici bir gundur");
        break;
    case 'cuma':
        console.log("bugun gunlerden cumadir e hafta ici bir gundur");
        break;
    case 'cumartesi':
        console.log("bugun gunlerden cumartesidir e hafta sonu bir gundur");
        break;
    case 'pazar':
        console.log("bugun gunlerden pazardir e hafta sonu bir gundur");
        break;
    default:
        console.log("hatali bir girdi lutfen kucuk harfler ile haftanin gununu yaziziniz");
        break;


}
console.log("*******************************");
//  case buldugunda ilgili case calısır ve break gorene kadar tum caseler calıstırılır
gun = 'persembe'

switch (gun) {
    case 'pazartesi':
        console.log("bugun gunlerden pazartesidir e hafta ici bir gundur");

    case 'sali':
        console.log("bugun gunlerden salidir e hafta ici bir gundur");

    case 'carsamba':
        console.log("bugun gunlerden carsambadir e hafta ici bir gundur");

    case 'persembe':
        console.log("bugun gunlerden persembedir e hafta ici bir gundur");

    case 'cuma':
        console.log("bugun gunlerden cumadir e hafta ici bir gundur");

    case 'cumartesi':
        console.log("bugun gunlerden cumartesidir e hafta sonu bir gundur");

    case 'pazar':
        console.log("bugun gunlerden pazardir e hafta sonu bir gundur");

    default:
        console.log("hatali bir girdi lutfen kucuk harfler ile haftanin gununu yaziziniz");

}

console.log("*******************************");
console.log("*************Date()******************");

// bugunu almak  new Date();
let now = new Date();
console.log("bugun = ", now);
let yil = now.getFullYear()
console.log("yil ", yil);

// aylar 0 dan baslar ocak 0 dir 
let ay = now.getMonth() + 1
console.log("ay ", ay);
// ayın gununu verir
gun = now.getDate()
console.log("gun ", gun);
let haftaninGunu = now.getDay()
    // haftanın gununu verir pazar =0, pazartesi = 1 ..... cumartesi =6
console.log("haftaninGunu ", haftaninGunu);
const d = new Date("2024-03-27");
console.log("mutlu yillar ", d);
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log("**************************************")
const dogumGunu = new Date("2024-03-27");
console.log("mutlu yillar ", dogumGunu);
// 2022-08-27
const evlilikYilDonumu = new Date();
evlilikYilDonumu.setFullYear("2022")
evlilikYilDonumu.setDate(27)
evlilikYilDonumu.setMonth(7)
evlilikYilDonumu.setHours(17)
console.log("evlilik yil donumu = ", evlilikYilDonumu);