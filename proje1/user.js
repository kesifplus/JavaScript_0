module.exports = class User {
    constructor(ad, email, sifre) {
        this.ad = ad;
        this.email = email;
        this.sifre = sifre;
    }
    showInfo() {
        return `isim : ${this.ad} email : ${this.email} sifre : ${this.sifre}`
    }
}