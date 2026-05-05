//primitive
// 7 type : String , number , boolean , null , undefined , symbol , bigint



//JavaScript is a prime example of a dynamically typed language, which means that variables can hold values of any type without explicit type declarations.
const score = 100; // score is a number
const scoreValue = 100.3;
let useEmail; // useEmail is undefined


const id = Symbol("123"); // id is a symbol
const anotherId = Symbol("123"); // anotherId is a different symbol, even though it has the same description
console.log(id === anotherId); // false


//Reference types(non-primitive )
//Array, Object , Function

const heros = ["shaktiman", "nagraj", "doga"]; // heros is an array


//Object

 let myObj={ name: "Dinesh",
  age: 25,
}
console.log(myObj)


//Function
const Myfunction = function(){
  console.log("Hello Dinesh")
}
console.log(Myfunction)

const outSidetemp = null
console.log(typeof anotherId);




//******************************************** */

// Stack (primitive) , Heap  (non primitive)

let myYoutubeName = "DineshKumardotcom"

let anothername = myYoutubeName
  anothername = "Madhudotcome"

console.log(myYoutubeName);
console.log(anothername);

//for Heap 

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "Dinesh@google.com"

console.log(userOne)
console.log(userTwo)