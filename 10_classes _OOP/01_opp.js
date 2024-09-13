const user ={
    user : "haseeb",
    email: "haseeb@gmail.com",
    loggedin :true,
    getUserDetail: function(){
        console.log(`${this.user} and his email is ${this.email} and 
                    ${this.loggedin} `)
    }
}


// console.log(user.getUserDetail());

function User(username,loginCount,isloggedin){
   this.username = username
   this.loginCount = loginCount
   this.isloggedin = isloggedin
 
//    return this 
}

const userOne = User("haseeb",3,true)
const usertwo =new User("abbasi",3,true)
// console.log(userOne.constructor)
console.log(userOne)
//console.log(usertwo)
console.log(usertwo instanceof User)