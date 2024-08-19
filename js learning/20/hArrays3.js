// 

const h=["thor","ironman","captain America"];
const d=["superman","batman","aquaman"];

const k=new Array(h);

k.push(d);

console.log(k);                 // the array elements are not pushed, the entire arrays is pushed
console.log(h);                 // the array is unchanged as created using object

// we can use concat but, kyu yaad rakhna

const p=[...h];

for(let x=0;x<d.length;x++)
{
    p.push(d[x]);
}

console.log(p);

// ya fir khali bna kar dono ko baari baari push kr sakte hai


//inbuilt hota hai concat array

console.log(h.concat(d));

// more used is spread operator

console.log([...h, ...d]);

// pure values ko alag alag kr dees

