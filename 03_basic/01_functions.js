// function add(number1, number2){
//     return number1+ number2
// }

// console.log(add(4,9))


function userloggedin(username){
    if(!username){
        console.log("please ender the name");
        return
    }
    return `${username} just logged in`
}

console.log(userloggedin("haseeb"))