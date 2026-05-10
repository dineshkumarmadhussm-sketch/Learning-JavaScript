// DAte 
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2026, 0, 5)
console.log(myCreatedDate);
console.log(myCreatedDate.getTime());

let myCreatedDate2 = new Date("01-5-2026")
console.log(myCreatedDate2);


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let myDate2 = new Date()
console.log(myDate2);

