//singleton object jb literals se creae krte hai tb sigleton object create nhi hota hai

//constructor se banta hai sigleton object

//object literals
//object me key pair hai basically dictionary hota hai

const mySym=Symbol("key1")
const JsUser={
    name: "Shivnand",
    age: 21,
    isActive: true,
    email: "shivnand@gmail.com",
    "full name": "Shivnand Khatri",
    [mySym]:"mykey1",//symbol access karne ka tarika and symbol banane ke liye usse square bracket me pass karna hota hai
}

console.log(JsUser.email)
console.log(JsUser["name"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email="shiv@gmail.com"
console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email="shiv3@gmail.com"
// console.log(JsUser)


//si
JsUser.greetings=function(){
    console.log("Hello")
}

JsUser.greetingsTwo= function(){
    console.log(`Hello ${this.name}`)   
}
//this will return the refrerence of the function
console.log(JsUser.greetings)
//this will run the function
console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())

