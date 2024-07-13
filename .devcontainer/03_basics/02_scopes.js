// var ka scope is global
//console ka scope and node ka global scope alag hai

function addOne(num){
    return num+1
}

//sometime we can it expression function
const addTwo=function(num){
    return num+2
}
addOne(5);
addTwo(5);

//function ko pehle call kiya ja skata hain but if woh expression waala function hain toh nahi