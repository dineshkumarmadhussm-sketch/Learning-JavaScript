// Array 
const arr = [0,1,2,3,4,5] //it is resixeble in js 
const myHeros = ["shaktiman","naagraj"]
//assesing array 
console.log(arr[1]);

const arr2 = new Array(1,2,3,4,5)
console.log(arr2[1]);

//Array methods

arr.push(6)
arr.push(7)
arr.pop()

arr.unshift(0)
arr.shift()
console.log(arr);

console.log(arr.includes(10));
console.log(arr.indexOf(10));

const newArray = arr2.join()
console.log(arr2);
console.log(typeof newArray);
console.log( newArray);

//slice , splice
console.log("A",arr2)
const myn1 = arr2.slice(1,2);
console.log(myn1);
console.log("B",arr2)