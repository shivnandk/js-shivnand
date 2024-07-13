const user={
    username:"shivnand",
    price:1000,
    //current context ko refer karne ke liye this keyword use hota hain
    welcoleMessage:function(){
        console.log(`Hello, ${this.username} your price is ${this.price}`);
        console.log(this);
    },
}


// user.welcoleMessage();
// user.username="shiv";
// user.welcoleMessage();
//browser mein this ka context window hota hain
// console.log(this);


// function chai(){
//     //this ka shi use object ke liye hota hain
//     let username   ="shivnand";
//     console.log(this.username);
// }
// chai()

// const chai=function(){
//     //this ka shi use object ke liye hota hain
//     let username   ="shivnand";
//     console.log(this.username);
// }
const chai=()=>{
    //this ka shi use object ke liye hota hain
    let username   ="shivnand";
    console.log(this);
}
chai()

// const addTwo=(num1, num2)=>(num1 + num2);
//implicit return
const addTwo=(num1, num2)=>({username:"shivnand"});
console.log(addTwo(1,2));