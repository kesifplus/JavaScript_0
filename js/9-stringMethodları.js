//template literal

let isim = "ahmet";
let soyIsim = "yildiz"

let tamIsim = isim + " " + soyIsim
console.log(tamIsim)
console.log("*******************")
let yeniIsim = `isim = ${isim} , soyIsim =  ${soyIsim}`
console.log(yeniIsim)
console.log("*******************")

let ikinciIsim = "isim = " + isim + " , soyIsim = " + soyIsim;
console.log(ikinciIsim)
console.log("*******************")

// string methodlari

let cumle = "bugun gunlerden sali"
    //charAt string içindeki index i verilen karakteri yakalar
console.log(cumle.charAt(4))

let ad = "melek"
let soyad = "kilic"
let genelIsim = ad + " " + soyad
genelIsim = `${ad} ${soyad}`

// concat iki string birleştirmek için kullandgınız bir method
genelIsim = ad.concat(soyad)
console.log(genelIsim)

console.log("******************")

// indexOf string içinde aranan kelimenin başlangıç index ini verir
cumle = "javaScript Java C# Php Html Css"
console.log(cumle.indexOf("C#"))
console.log(cumle.indexOf("hey"))
console.log(cumle.indexOf("java"))
console.log(cumle.toLowerCase().indexOf("java"))

// lastIndexOf string içinde aranan kelimenin başlangıç index ini verir 
// aranan kelime birden fazla var ise son bulunanın indexini verir
console.log(cumle.lastIndexOf("java"))

// toLowerCase cumlenin tum karekterlerini kucuk harfe cevirir
let kelime = "MerHaba Bugun JavaScript DeRsi VAr"
kelime = kelime.toLowerCase()

// toUpperCase cumlenin tum karekterlerini buyuk harfe cevirir
kelime = kelime.toUpperCase()
console.log(kelime)
console.log("*******slice*********")
    // slice cumle içersin indexleri verilen aralıgı yakalar

kelime = "MerHaba Bugun JavaScript DeRsi VAr"

// kelimenin 2. ve 5. indexdeki arasındaki degeri alır (2. index dahil)

console.log(kelime.slice(2, 5))
    // kelimenin 2. ve 5. indexdeki arasındaki degeri alır (2. index dahil)
console.log(kelime.substring(2, 5))
    // 5. indexden sonraki tüm içerigi al
console.log("tek paremetre slice = ", kelime.slice(5))

// birinci paremete baslangıc index ikinci paremetre kaç karekter alacagının sayısı
console.log("substr = ", kelime.substr(5, 10))
console.log(kelime.slice(-5))

console.log("*********trim**********")

// trim cumlenin basındaki ve sonundaki boslugu siler

kelime = "  selam Asli  "
console.log(kelime, kelime.length)
kelime = kelime.trim();
console.log(kelime, kelime.length)

// trimEnd cumlenin sonundaki boslugu siler
kelime = "  selam Asli  "
kelime = kelime.trimEnd()
console.log(kelime, kelime.length)

//// trimStart cumlenin basındaki boslugu siler
kelime = "  selam Asli  "
kelime = kelime.trimStart()
console.log(kelime, kelime.length)

console.log("******replace************")

// replace ilk paremetre degeri ile ikinci paremetre degeri ile gunceller
// birden fazla asli var ise ilk asli yi merve cevirir

kelime = "selam asli nasilsin asli"
console.log(kelime)
kelime = kelime.replace("asli", "merve")
console.log(kelime)

console.log("********replaceAll**********")
kelime = "selam asli nasilsin asli"
console.log(kelime)
kelime = kelime.replaceAll("asli", "merve")

console.log(kelime)

/*
const regex = /Asli/ig;
console.log(kelime.replaceAll(regex, 'ferret'));
*/
console.log("********endsWith **********")

// endsWith cumlenin sonu paremetredeki deger ise true degilde false degerini verir
kelime = "selam asli nasilsin asli"
let isEndWord = kelime.endsWith("aslim")
console.log(isEndWord)

console.log("********startsWith **********")
kelime = "selam asli nasilsin asli"
let isStartWord = kelime.startsWith("selamlar")
console.log(isStartWord)
console.log("********************")

kelime = "selam asli nasilsin asli"
let yeni = kelime.split(" ")
console.log(yeni)
    /*
    let ornek = kelime.split("asli")
    console.log(ornek)
    */
let diller = "java,javaScript,C#,Python,Php"
let yeniDiller = diller.split(",")
console.log(diller)
console.log(yeniDiller)