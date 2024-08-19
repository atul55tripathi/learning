// implementation of arrow
// function likhne ki jagah
// ()=>
 const adder=(x,y)=>{
    return x+y;
 }

 console.log( adder(2,5));

 // another way is implicit return
 // as the return and function is of one line
 // need not write return

 const addd=(x,y)=> x+y;

console.log(addd(7,8));

// curly braces me return likhna padega
// waise nhi likhna likhna padega

// arrow function ko braces me object bhi pass krwa sakte hai

const add=()=>({name:"atul"})

// sirf curly braces hote to error aata