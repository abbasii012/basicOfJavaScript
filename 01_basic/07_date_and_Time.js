let date = new Date()
// console.log(date);
// console.log(date.getTime());
// console.log(date.toISOString());
// console.log(date.toDateString());
// console.log(date.toString());
// console.log(date.toJSON());
// console.log(date.toTimeString());
// console.log(typeof date);    // objects
// console.log(date.toLocaleString());   
let data = new Date("2024-01-15")
let date01 = new Date("1-15-2021")
let date2=new Date(2021,0,12)
// console.log(data.toLocaleString())
// console.log(date2.toLocaleString())
// console.log(date01.toLocaleString())
//  let Timestamp = Date.now()

//  console.log(Math.floor(Timestamp/1000))
//  console.log()

let date3 = new Date()

// console.log(date3.getFullYear());
console.log(date3.toLocaleString("Default",{
    weekday:"long",
    year : "numeric"
}));



