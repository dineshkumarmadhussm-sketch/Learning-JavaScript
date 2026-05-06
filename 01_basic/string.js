const name = "Dinesh"
const repoCont = 5;

console.log(name + repoCont + "value")

console.log(`Hello my name is ${name} and My repo cont is ${repoCont}`)

const gameName = new String('Dinesh')
// console.log(gameName[0]);
// console.log(gameName,__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'))

 const newString = gameName.substring(0,3)
 console.log(newString);

 const anotherString = gameName.slice(-4,3)
 console.log(anotherString);


 const newStringOne = " Dinesh  "
 console.log(newStringOne)
 console.log(newStringOne.trim())


const url = "https://Dinesh.com/Dinesh%30Kumar"
console.log(url.replace('%30' , '-'))
console.log(url.includes('Dinesh'))

