let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const inputFild = document.querySelector('#guessField')
const guessSlote = document.querySelector('.guesses')
const remanings = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess =[]
let numGuess = 1

let playGame = true;
if(playGame){
    submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess = parseInt(inputFild.value)
    validateGuess(guess)
    })
}

function validateGuess(guess){
  if(isNaN(guess))
   alert('PLease enter a valid number');
  else if (guess < 1)
    alert('PLease enter a more than 1');
  else if (guess > 100)
    alert('PLease enter a more than 100');
  else {
     prevGuess.push(guess)
     if(numGuess === 11){
        displayGuess(guess)
        messageGuess(`Game Over. Random number was ${randomNumber}`);
        endGame();
     }else {
        displayGuess(guess);
        checkGuess(guess);
      }
  }


}

function checkGuess(guess){
    if(guess === randomNumber){
        messageGuess("you are guessed it rigth")
        endGame();
    }
    else if (guess < randomNumber){
        messageGuess("your guess TOO low")
    }
    else if (guess > randomNumber){
        messageGuess("your guess TOO High")
    }
}
function displayGuess(guess){
    inputFild.value = ''
    guessSlote.innerHTML +=`${guess}, `;
    numGuess++
    remanings.innerHTML = `${11 - numGuess} `;
}

function messageGuess(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    inputFild.value = '';
    inputFild.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
    
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlote.innerHTML = '';
      remanings.innerHTML = `${11 - numGuess} `;
      inputFild.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
}

