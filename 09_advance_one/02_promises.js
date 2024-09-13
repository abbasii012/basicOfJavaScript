const promisesOne = new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    },1000)
})

promisesOne.then(function () {
       console.log('promises consumed')
})


new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log('Async task  2 is complete');
        resolve()
        
    },1000 )
})
.then(function (){
    console.log('task 2  consumed ')
})


const promiseThree = new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log('Async task  3 is complete');
        resolve({username: "haseeb", email:'haaseeb@gmail.com'}) 
        
    },1000 );
})


promiseThree.then(function (user) {
    console.log(user)
})


const promisesFour = new Promise(function(resolve,reject){
     setTimeout(() => {
        let error = true
        if (!error){
            resolve({username: "hasee", email:'haaseeb@gmail.com'})
        }else{
            reject('error: somethings')
        }
     }, 1000);
})


promisesFour
 .then(function (user) {
    return user.username 
})
.then(username => console.log(username))
.catch(function (str) {
    console.log(str)  
})
.finally(()=>{
    console.log('the promises is either resolve or rejects' );
    
})


const PromiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if (!error){
            resolve({username: "javaScript", email:'heel@gmail.com'})
        }else{
            reject('error:  JS somethings')
        }
     }, 1000);
})

async  function consumePomisesFive(){
   try {
    const response  = await PromiseFive 
   //  this is objects so we do not user the PromisesFive()
   console.log(response);
   } catch (error) {
      console.log(error); 
      
   }
   
}

consumePomisesFive()


async function alluser(){
    try {
     const reponse =   await fetch('')
    const data = await reponse.json()
    console.log(data)
    } catch (error) {
        console.log(data)
    }
}
alluser()



fetch('').then(()=>{
   return reponse.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
   console.log(error);
   
})