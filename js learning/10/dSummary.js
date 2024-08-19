// summary of datatypes for interview

// do tarah k hi hote hai
// premitive and non premitive

// primitive ki properties like data member and member function change nhi ho skte

// non premitive k user k upar hota hai, jaise chahe define krde

// String, Number, Boolean, null, undefined, Symbol, BigInt

// null= value hai, ki koi value nhi... jaise temperature jabtak calculate nhi hua, tabtak null
// undefined= ban chuka hai, abhi koi value nhi hai ... temperature abhi bna bhi nhi hai



// java script is dynamically typed language
// type script is statically typed


const id= Symbol('123');
const anotherId=Symbol('123');

console.log(id);
console.log(anotherId);
console.log(id==anotherId);         // false

// Non Premitive
// Array, Objects, Functions

const heros=["Atul","Superman","Batman"];
let myObj= {
    name: "Atul",
    age: 22,
}

//function

const myFunction =function(){
    console.log("hello bhai kaise ho");
};


const myFun= function (x)
{
    // console.log("the type of the variable "+ x +" is: ");
    console.log(typeof x);
}

myFunction();

myFun(anotherId);           // symbol

myFun(myObj);               // object

myFun(heros);               // object

myFun(myFunction);          // function