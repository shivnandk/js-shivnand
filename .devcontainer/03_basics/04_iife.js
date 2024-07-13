//iife
//Immediately Invoked Function Expression
//IIFE is a JavaScript function that runs as soon as it is defined.
//It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts.
//The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). 
//This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//The second part creates the immediately invoked function expression () 
//through which the JavaScript engine will directly interpret the function.


(function chai(){
    //named iffi
    console.log('DB Connected');
})();//we have to end it by using semicolon

//arrow function

// 2 iifi hai toh dono ke beeche semicolon lagana padega
// unnamed iffi
( (name)=>{
    console.log(`Hello, ${name}`);
})("shivnand");