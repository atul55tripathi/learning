// earlier in the languages like C we had to think before using variables
// making space for variables and freeing that space was part of language

// lekin abhi ki mordern languages have their own garbage collectors

// there are two types of memory,
// stack and heap

// pritive are in stack
// non primitive in heap


let a=5;
let b=a;

b=6;

console.log("a is: "+a+" and b is: "+ b);

// the original variable is not changed
// but this is not the case with non primitive data types

let aObj={
    name:"Atul",
    age:24
};

let bObj=aObj;

aObj.name="Pankaj";         // change a or b, both will be changed 
                            // both don't have any value
                            // just a reference to space in memory where it is kept

console.log(aObj);
console.log(bObj);

// lets try with array

let ar1=["Atul","Pankaj","Rahul"];

let ar2=ar1;

ar1[1]="Raj";

console.log(ar1);
console.log(ar2);

// same like object, ye bhi value nhi reference rakhta hai memory ka