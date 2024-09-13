// function -> object -> null

function multiplyby5(num){
    return num*5 
}

multiplyby5.power = 9

// console.log(multiplyby5(5));
// console.log(multiplyby5.power);

function UserScore(username,score){
    this.username=username
    this.score=score

  
}
UserScore.prototype.increaments = function(){
   this.score++
}

const tea = new UserScore('chai',45) // for acess the prototype new keyword is nessary
const chai = new UserScore('chai1', 566)

tea.increaments()
console.log(tea);

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/




