//for of loop
//yeh array specific loop hai

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const val of arr) {
    console.log(val);
}

//maps
const map= new Map();
map.set('name','shivnand');
map.set('age',21);
map.set('state','MP');

console.log(map);

for(const [key,value] of map){
    console.log(`Key is ${key} and value is ${value}`);
}
console.log(map['name']);

// const myObj={
//     "name":"shivnand",
//     "age":"21",
//     "state":"MP"
// }
//yeh nhiii chalta
// for(const [key,val] of myObj){
//     console.log(`Key is ${key} and value is ${val}`);
// }