//array
//in array we can store multiple types of data

//javascript array are resizable
const myArray = [1, 2, 3, 4, 5];

//Shallow copy have same refrence whereas deep copy have different refrence
const newArray =new Array(1,2,3,4,5);
//same as push_back in c++ pop_back in c++
myArray.push(1)
console.log(myArray);
//push it in front means it rotates the array
myArray.unshift(102)
//shift to remove from front
myArray.shift()