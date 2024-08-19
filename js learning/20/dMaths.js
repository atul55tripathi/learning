// learning maths

console.log(Math.PI);               // pi ki tarah aur bhi constants hai

console.log(Math.abs(-43));         // absolute value

console.log(Math.round(4.332));     // decimal values hta dete hai

console.log(Math.ceil(4.3));        // top int
console.log(Math.floor(4.2));       // min int

console.log(Math.sqrt(25));         // similar

console.log(Math.pow(2,5));         // same hai har language me

console.log(Math.max(1,2,3,4));     // puri list bhej sakte hai

console.log(Math.random());         // always gives value between zero and one
                                    // zero inclusive and one exclusive

// mujhse zero se 100 tak random values chahiye
console.log(Math.floor(Math.random()*100));

// mujhe 200 se 223 ki beech me random values chahiye

const mini=200
const maxi=223

// the range would be ma-mi+1 right?

// and utne numbers jo randomly generate hore wo add krde mini me
console.log(Math.floor(Math.random()*(maxi-mini+1))+mini);