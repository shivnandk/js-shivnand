const myNums=[1,2,3]


//yeh karts me use karenge
// const myTotal=myNums.reduce(function(acc,currVal){
//     console.log(`acc `+acc+` curr `+currVal)
//    return acc+currVal
// },0)

const myTotal=myNums.reduce((acc,currVal)=> acc+currVal,0)
console.log(myTotal)

const shoppingCart=[
{
    itemname:"Js course",
    price:100
}
,
{
    itemname:"React course",
    price:200
},
{
    itemname:"Node course",
    price:300
}
]

const total=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(total)