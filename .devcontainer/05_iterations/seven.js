const myNums=[1,2,3,4,5,6,7,8,9,10]


// map operation lagata hai
// const newNums=myNums.map((num)=>num+4 )

//chaining of map operation and first map comes first and so on
const newNums=myNums
            .map((num)=>num*10)
            .map((num)=>num+3)
            .filter((num)=>num>50)
console.log(newNums)