// const coding=["js","py","java","cs","rb"]

// const values=coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })

// console.log(values)

// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=> num >4 )

// const newNums2=myNums.filter((num)=> {
//     //beginners mistake to not use return keyword when habing explicit return in case implicit return nhii karna padhta hai
//     return num >4
// } )
// console.log(newNums2)

const books=[
    {
        title:"Book1",
        genre:"Fiction",
        publishYear:2021
    },
    {
        title:"Book2",
        genre:"Non-Fiction",
        publishYear:2020
    },
    {
        title:"Book3",
        genre:"Fiction",
        publishYear:2019
    },
    {
        title:"Book4",
        genre:"Non-Fiction",
        publishYear:2018
    },
    {
        title:"Book5",
        genre:"Fiction",
        publishYear:2017
    },
    {
        title:"Book6",
        genre:"Non-Fiction",
        publishYear:2016
    },
    {
        title:"Book7",
        genre:"Fiction",
        publishYear:2015
    },
    {
        title:"Book8",
        genre:"Non-Fiction",
        publishYear:2014
    },
    {
        title:"Book9",
        genre:"Fiction",
        publishYear:2013
    },
    {
        title:"Book10",
        genre:"Non-Fiction",
        publishYear:2012
    }
]

// const userBooks=books.filter((bk)=>bk.genre==="Fiction")
const userBooks=books.filter((bk)=>bk.publishYear>="2015"&&bk.genre==="Fiction")
console.log(userBooks)