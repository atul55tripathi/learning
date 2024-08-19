// arrays

const a=[1,2,3,4];

let k= Math.min(...a);      // pass array elements as argument

console.log(k);

// array always makes shallow copies
// shallow copies are the ones which do not have an memory for variable
// they have reference to the memory location where the value is stored

const newA=new Array(1,2,3,4);

console.log(newA[2]);

// some array methods

newA.push(5);           // same like push_back();

console.log(newA);

newA.pop();

console.log(newA);      // same as pop_back();

// for poping first element use
newA.shift();
console.log(newA);

// check the array contains a number or not
console.log(newA.includes(3));

// where is the element, and return -1 if not found
console.log(newA.indexOf(5));

// convert to string sapareated by commas

const sen=newA.join();

console.log(sen);
console.log(typeof sen);