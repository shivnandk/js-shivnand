const userEmail="shivnand@gmail.com"

if(userEmail){
    console.log("Email is present");
}
else{
    console.log("Email is not present");
}

//truthy values and falsy values
//false,0,"",null,undefined,NaN,-0, BigInt 0n
//truthy values are all values except falsy values
//truthy values are true,{},[],"shivnand",1,2,3,4,5,6,7,8,9,10,"0",'false'," ",function(){},()=>{}
// if(userEmail.length===0){
//     console.log("Email is not present");
// }

const emptyObj={

}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//Nullish coalescing operator ??
let val1;
val1=5??10;
val1=null??10;

//agar value null aye toh usse check kar paye
console.log(val1);

//ternary operator
const iceTeaPrice=100;
iceTeaPrice>=80?console.log("I will buy ice tea"):console.log("I will not buy ice tea");
