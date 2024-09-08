// singleton
//Object.create
// const tinderuser = new Object()
// console.log(tinderuser);



//object literal
const mysym = Symbol("mykey")
const jsuser ={
    name : "haseeb",
    age : 23,
    "full name":"haseeb sajjad",
    location: "rawalakot",
    [mysym]:"mykey1",
    email: "haseeb@gmail.com",
    isloggeedin: true,
    lastloggeddays: ["monday","tuesday"],
}
// console.log(jsuser.email);
// console.log(jsuser["full name"]);
// console.log(jsuser["location"]); // for access the key we need use in string 
// console.log(jsuser[mysym])   //  symbol is direct acess
// console.log(jsuser)
// jsuser.email = "haseebsajjad@"

// we can freeze the objects for not changing the values in objects,
// Object.freeze(jsuser);


// jsuser.greeting = function(){
//     console.log(`hello i am  ${this.name} and  age is  ${this.age}` );
    
// }
// console.log(jsuser.greeting());
