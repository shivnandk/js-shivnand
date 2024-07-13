//array
//in array we can store multiple types of data

//javascript array are resizable
// const myArray = [1, 2, 3, 4, 5];

//Shallow copy have same refrence whereas deep copy have different refrence
const newArray =new Array(1,2,3,4,5);
//same as push_back in c++ pop_back in c++
// newArray.push(1)
// console.log(newArray);
// //push it in front means it rotates the array
// newArray.unshift(102)
// //shift to remove from front
// console.log(newArray);
// newArray.shift()
// console.log(newArray);


// console.log(newArray.includes(1))

// console.log(newArray.indexOf(55))

//join makes the array into string
const myArray = newArray.join()
// console.log(myArray)    
// console.log(newArray)

//slice and splice
console.log("A ",newArray)
const myn1=newArray.slice(1,3)
console.log(myn1)
console.log("B ",newArray)

//splice
const myn2=newArray.splice(1,3)
console.log("c ",newArray)
console.log(myn2)

//splice manipulate the original at the same time slice does not manipulate the original array
//splice is used to remove the element from the array
