// geneate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i =0; i<6 ;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
   return color
}
let StopME
function ChangeColor(){ 
    if(!StopME){ 
        StopME = setInterval(Change,1000)
       }
  
}
function Change() {
    document.body.style.backgroundColor = randomColor()
 }

function StopColor() {
    
       
      clearInterval(StopME)
        StopME = null
  }

document.querySelector('#start').addEventListener('click',ChangeColor)
document.querySelector('#stop').addEventListener('click',StopColor)

