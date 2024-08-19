// de structuring the object
// react me directly ayese hi use hote hai, properties pass krte time

 const a={
    name: "Atul"
 }

 //adding one more attribute to this object
a.age=5;

 // now I dont want to use a.name everytime
 // can I destructure this?

const {name: n}=a;

console.log(n);

// now i want to access age using another variable
// let x=age... kaise karoge destructure

const {age: x}=a;

console.log(`the age of ${n} is: ${x}`);