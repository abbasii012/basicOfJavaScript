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




