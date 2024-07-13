//dates
// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString);
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());

// let mydate2 = new Date(2023,0,23,10,10,10,10);

//month starts from 01 and day starts from 1
//while giving input other wise date and month start from 0
let mydate2 = new Date("01-06-2023");
console.log(mydate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mydate2.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate= new Date();
console.log(newdate.getDay());
newdate.toString('default',{
    weekday:'long',
    timezone:'UTC'
})

console.log(newdate.toLocaleString());