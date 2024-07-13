const myObj={
    js: 'Javascript',
    cpp: 'C++',
    py: 'Python',
    rb: 'Ruby',
    swift: 'Swift'
}

// for (const key in myObj) {
//      console.log(`Key is ${key} and value is ${myObj[key]}`);
// }

const arr = ["js", "cpp", "py", "rb", "swift"];
for (const key in arr) {
     console.log(key)
     //yeh index print karega
     console.log(arr[key])
}

//for in se map me iterate nahi kar sakte
