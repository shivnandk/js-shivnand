function sayMyname() {
  console.log("Hello, my name is Shivnand");
  console.log("Hello, my name is Shivnand");
  console.log("Hello, my name is Shivnand");
  console.log("Hello, my name is Shivnand");
  console.log("Hello, my name is Shivnand");

}

// sayMyname();

function sayMyname(name) {
  console.log(`Hello, my name is ${name}`);
}

sayMyname("Shivnand");

//we can pass default value to the function 

//functions with object
//rest operator
function calculateCartPrice(val, val2,...num1){
    return num1;
}

console.log(calculateCartPrice(1000,400,10000))

const user={
    username:"shivnand",
    price:1000,
}

function handleObject(anyobjec){
    console.log(`Hello, ${anyobjec.username} your price is ${anyobjec.price}`);
}

// handleObject(user);
handleObject({username:"shiv",price:2000});

const myNewArray=[1,2,3,4,5,6,7,8,9,10];

function getArrayfirst(array){
    return array[1];
}