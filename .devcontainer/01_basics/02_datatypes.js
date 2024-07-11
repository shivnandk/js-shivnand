"use strict";//treat all js code as new version
// alert("Hello, World!"); we are using node js not browser
console.log("shivnand");
console.log("khatri");

let name="shivnand";
let age=20;
let isLoggedIn=false;

//number 2 to the power 53-1
//bigit yha bht bada number hota hai
//boolean
//string ""
//null =>standalone value
//undefined
//symbol apn me use karenge
console.log(typeof undefined);


//primitive data types
//7 types of data types
//number
//string
//boolean
//null
//undefined
//symbol
//bigint

//non primitive data types
//reference data types
//Array Objects,functions
//javasCRIPT IS DYNAMICALLY TYPED LANGUAGE
// big int ka data type 
//stack memory me copy milti hai where as heap memory me reference milta hai 
//stack (primitive data types) heap (non primitive data types)
let userOne={
    email:"shivnand@gmail.com",
    password:"shivnand123",
    upi:"shivnand@okhdfcbank"
}
let userTwo=userOne;
userTwo.email="shiv@gmail.com";
console.log(userOne.email);