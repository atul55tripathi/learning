// learning about dates

let timeB=Date.now();

const d=new Date("2024-03-25");

console.log(d);         // get the date and time together

const today=new Date(); // initializing with current date and time

console.log(today);

console.log(today.toLocaleDateString());        // desi format

console.log(today.toDateString());              // understandable format

 let timeN=Date.now();

 console.log(`total time to execute this code is: ${timeN-timeB} miliseconds`);