// let one = 'haseeb    '
// let twe = "hasee    "

// consloe.log(one.truelength()) // solution is end


let myhero = ['hulk','thor']


let myheroPower ={
    thor : "hammer",
    spidername : "sling"
}

// Object.prototype.haseeb = function(){
//     console.log("haseeb is every where")
// }

// myheroPower.haseeb()
// myhero.haseeb()

// array -> objects -> null

Array.prototype.hasee = function(){
    console.log("haseeb is every where")
}

// myheroPower.haseeb() 
// myhero.hasee()  // this ony acces all array becase it decleare at array level 



// inheritance


const User = {
  name : "haseeb"
}

const Teacher = {
    makeVide :true
}

const TeacherSupport = {
    isAvailable :true
}

const TASupport = {
    makeassignment :'js Assignment',
    __proto__:TeacherSupport
}

// console.log(TASupport.isAvailable) // inheritance from TeacherSupport
// Teacher.__proto__ = User   // we can use way also.


// modern syntax 

// Object.setPrototypeOf(TeacherSupport, Teacher)
// console.log(TeacherSupport.makeVide)


// let one = 'haseeb    '
// let two = "hasee    "
// String.prototype.truelength = function (){
//     console.log(this.trim().length)
// }

// console.log(two.truelength())