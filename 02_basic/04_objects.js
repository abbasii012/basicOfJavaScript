// singleton
//Object.create

// const tinderuser = new Object()
// console.log(tinderuser);


// const obj1 ={
//     email:"haseebsajjad",
//     fullname:{
//         firstname:{
//             name:"haseeb",
//         },
//     },

// }
// console.log(obj1.fullname.firstname.name);

const obj1 = {0:"one",1:"two"}
const obj2 = {2:"three",3:"four"}

// const obj3 = {obj1,obj2}
// console.log(obj3)

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)


//  most useable for join and concstenation array and oobjects spread method
// const obj3 = {...obj1,...obj2}
// console.log(obj3)

// const user =[
//         {
//             user1 : "haseeb"

//         },
//         {

//         },
//         {

//         }    

// ]
// console.log(user[0].user1);

// const user = {
//     name : "haseeb",
//     age: 18,
// }

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
// console.log(user.hasOwnProperty("name"))


//++++de structureting+++++

const course ={
    coursename : "js in urdu",
    coursePrice : "199",
    courseinstrcutor : "hitesh",
}
// console.log(course.courseinstrcutor)
const {courseinstrcutor : instructor,coursePrice:price} = course


console.log(instructor)
console.log(price)