// how to combine two objects?

// this is done just like how we combined two arrays

let a=[1,2,3];
let b=[4,5,6];

let c=[...a,...b];

for(let x=0;x<c.length;x++)
{
    console.log(c[x]);
}

// same way two objects can be added

let ob1={
    name: "atul",
    age: 25
}

let ob2={
    roll: 45,
    bench:100
}

let ob3={...ob1,...ob2};

console.log(ob3);