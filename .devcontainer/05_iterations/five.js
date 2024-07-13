const codingLanguages = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'];

// codingLanguages.forEach(function (item){
//     console.log(item);
// });


// codingLanguages.forEach((item)=> {
//     console.log(item);
// });

function printMe(item){
    console.log(item);
}

// codingLanguages.forEach(printMe);

const myCoding=[
    {
        languagename:"JavaScript",
        languagefile:"js"
    },
    {
        languagename:"Python",
        languagefile:"py"
    },
    {
        languagename:"Java",
        languagefile:"java"
    },
    {
        languagename:"C#",
        languagefile:"cs"
    },
    {
        languagename:"Ruby",
        languagefile:"rb"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languagename)
})