const marvel_heros=["thor","ironMan","spiderman"]
const dc_heros=["batman","superman","flash"]

//push me ek element as a whole add hota hai
//and do changes in the original array
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

//whereas in cancate ek ek karke element add hota hai
// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)

//spread operator is used to add the element in the array
const allnewheros=[...marvel_heros,...dc_heros]
console.log(allnewheros)

const anotherArray=[1,2,3,[1,1,5,5],4,5,[25,[52,5,1]]]
//flat is used to remove the nested array and make it a single array infinity means it will remove all the nested array\
//flat takes the depth of the array
const realanotherArray=anotherArray.flat(Infinity)
console.log(realanotherArray)

console.log(Array.isArray("Shivnand"))
//from create an array from the string
console.log(Array.from("Shivnand"))
console.log(Array.from({name: "Shivnand", age: 21})) //intersting case

let score1=20
let score2=30
let score3=40
//adding the element in the array
console.log(Array.of(score1,score2,score3))