//primitive
// 7 typess:
// number,string,boolean,null,undefined,symbol,Bigint

let score = 100
let valuescore = 100.3
let outsidetemp = null 
let username = "haseeb"
let email = undefined
let isloggedin = false
let id =Symbol("123")
let anotherid =Symbol("123")
// console.log(id==anotherid);
let numbber =124524523452354252n
// console.log(typeof score)
// console.log(typeof valuescore)
// console.log(typeof outsidetemp)
// console.log(typeof username)
// console.log(typeof isloggedin)
// console.log(typeof id)
// console.log(typeof numbber)


//NON-primitive(reference)
//arrays,objects,functions

let scores =[12,34,45,56]
let myValue = {
    name:"haseeb",
    age : 12,
}


const myfun = function(){
console.log("hello worlds");

}
// console.log(typeof scores)
// console.log(typeof myValue)
// console.log(typeof myfun);


//============Stack and Heap===========
//stack (primitive), heap (non -primitive)


let mychannel = "haseeb@"
let anotherchannel = mychannel
anotherchannel= "abbasi@"

console.log(mychannel)
console.log(anotherchannel)

let user1={
    email:"haseb@google.com",
    upi:"upi12"
}
let user2=user1
user2.email="abbasi@gmail.com"

console.log(user1)
console.log(user2)
// stack will take a copy and heap will take the reference of objects
