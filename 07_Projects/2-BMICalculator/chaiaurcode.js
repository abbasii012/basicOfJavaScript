const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const  height = parseInt(document.querySelector('#height').value)
    const  weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results');


    if(height === ''|| height < 0   || isNaN(height)){
        result.innerHTML = `Please Enter the Valid Number ${height}`;
    }
    else if(weight === ''|| weight < 0   || isNaN(weight)){
        result.innerHTML = `Please Enter the Valid Number ${height}`;

    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if(bmi <= 18.6){
     result.innerHTML = `<span>${bmi} Under Weight</span>`;

    }
    else if(18.6 <= bmi && bmi <= 24.9){
        result.innerHTML = `<span>${bmi} Normal range</span>`;
   
       }
      else if(bmi >= 24.9){
        result.innerHTML = `<span>${bmi} Over Weight</span>`;
   
       }
  }


  
    }


    

)


