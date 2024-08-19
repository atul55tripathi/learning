// var let const 
// and hoisting kya cheez hai?

var a=300;
let b=30;
console.log(a);
console.log(b);

{
    let b=25;
    var a=39;
}

// console.log(b);      //this gives error

// another b is created and deleted after exiting the block scope

console.log(b);
console.log(a);

// hence var is not used