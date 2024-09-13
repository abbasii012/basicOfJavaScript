function Setusername(username) {
    this.username=username
}

function createuser(username,email,pass) {
    Setusername.call(this,username)
    this.email = email
    this.password = pass
}

const chai = new createuser('haseeb','chai@gmail.com',12345)
console.log(chai);
