let data = [];

function register(user) {
    // data arrayi for ile don 
    // parametre gelen user objesindeki email var ise 
    // kullanıcı zaten var diyece
    // yok ise data arrayine pushlayacak
    //console.log("register = ", user.email);

    let durum = false;
    if (data.length == 0) {
        durum = true
    }
    for (let index = 0; index < data.length; index++) {
        if (data[index].email == user.email) {
            durum = false;
            break;
        } else {
            durum = true;

        }
    }
    if (durum) {
        data.push(user);
    }
}

function login(user) {

    let durum = false;
    let mevcutUser;
    for (let index = 0; index < data.length; index++) {
        if (data[index].email == user.email) {
            mevcutUser = data[index];
            durum = true;
            break;
        }
    }
    if (durum) {
        if (mevcutUser.sifre != user.sifre) {
            console.log("sifre hatali");
        } else {
            console.log("hos geldiniz");
        }


    } else {
        console.log("lutfen kayit yapinizs");
    }

}

module.exports = {
    'data': data,
    'register': register,
    'login': login
}