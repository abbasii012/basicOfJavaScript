// const red = [1,2,3,4,5,6,7,8]
// const reducer =red.reduce((acc,curr)=>{
//     console.log(`${acc}and ${curr}`)
//    return acc+curr
// },0);

// console.log(reducer)

// const mynum = [1,2,3,4,5,6,7]
// const num = mynum.reduce((acc,curr)=>acc+curr,0)
// console.log(num)


const cart = [
    {
        name : 'abc',
        price : 1222

    },
    {
        name : 'cde',
        price : 1222

    },
    {
        name : 'xyz',
        price : 1222

    },
]

const newCart = cart.reduce((acc, curr)=>{
    return acc + curr.price
},0)

console.log(newCart)