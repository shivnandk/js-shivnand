const name = "shivnand";
const repoCount = 50;

console.log(name + repoCount + "Value");
console.log(`My name is ${name} and my reposcount is ${repoCount}`);

const gameName = new String("PUBG");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toLocaleLowerCase());

const newString = gameName.substring(0, 2);
console.log(newString);

const anotherString = gameName.slice(0, 2);
console.log(anotherString);

const newStringOne = "    skklllll  ";
console.log(newStringOne.trim());

const url = "https://www.google.com";
console.log(url.replace("https", "http"));


//check if a string contains a word
const string="My name is shivnand";

console.log(url.includes("google"));
console.log(string.split(" "));
