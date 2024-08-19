// slice and splice

const a=[1,2,3,4,5,6,7,8,9];

const n1=a.slice(1,3);

console.log(n1);
console.log(a);     // the original array is not manupulated

const n2=a.splice(3,6);

console.log(n2);    // one more index then slice
console.log(a);     // orignal array is changed

