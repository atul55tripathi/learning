// when there is forward and backward intending spaces
// we can use trim to remove them

let a="     -   Atul      -       Tripathi";

console.log(a);
console.log(a.trim());          // removes only front and back spaces, not the middle ones

console.log(a.replace("Atul","Pankaj"));

console.log(a.replace("Atul","Pankaj").trim()); // using function on function

// check where there is some substring there in the string or not

console.log(a.includes("Tripathi"));

console.log(a.split("-"));      // returns the array of string without the saperator