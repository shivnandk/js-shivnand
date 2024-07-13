// const tinderUser=new Object(); yeh ek single object create karega
const tinderUser={}//yeh ek single object hai

tinderUser.id="11555shb"
tinderUser.name="shivnand"
tinderUser.age=21
tinderUser.isActive=true

// console.log(tinderUser)

const regularUser={
email:"some@gmail.com",
fullname:{
    userfullNmame:{
        firstname:"some",
        lastname:"Mansingh"
    }
},
}

// console.log(regularUser.fullname.userfullNmame.firstname)

//objest can be combined

const obj1={1:"one",2:"two"}
const obj2={3:"three",4:"four"}

// const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2) //this will merge the object and modify the first object
//inoreder to prevent it we do this
// const obj3=Object.assign({},obj1,obj2) 

// //spread operator is used to merge the object
// const obj3={...obj1,...obj2}
// console.log(obj3)
// // console.log(obj1)



// //array of object
// const users=[
//     {
//         id:1,
//         name:"shivnand",
//     },
//     {
//         id:2,
//         name:"shiv",
//     },
//     {
//         id:3,
//         name:"nand",
//     },
    
// ]

// console.log(users[2].name)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("nam"))


const course={
    coursename:"javascript",
    price:"1000",
    courseInstucttor:"shivnand",
}

// console.log(course.courseInstucttor)
const {courseInstucttor}=course

const {courseInstucttor:instructor}=course//gives a new name to the object
console.log(instructor)

//apis 
//json
// {
//     "name":"shivnand",
//     "coursename":"javascript in hinid",
//     "price":"free",
// }