const { data, register, login } = require('./data')
const User = require('./user')

baslangicDataAtama();

let user5 = new User("mert", "abc@gmail", 123456);

login(user5);

function baslangicDataAtama() {

    const user1 = new User("ahmet", "abc@gmail", 123456);
    const user2 = new User("mehmet", "xyz@gmail", 123456);
    const user3 = new User("leyla", "ccc@gmail", 123456);
    const user4 = new User("asli", "mm@gmail", 123456);

    register(user1)
    register(user2)
    register(user3)
    register(user4)
}