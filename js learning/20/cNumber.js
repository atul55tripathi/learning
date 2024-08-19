const a=new Number(4.6);

console.log(a.toString()); // and now we can use it like a string

console.log(a.toFixed(2));  // kitni precision chahiye

// most often used in E commerce, where customer is not accustomed to seeing large pointer precision

const num= 19213.43253;

// to precision string return karta hai, where number of digits = passed argument

console.log(num.toPrecision(5));

// to make representation easy
// by default american standard
// we can change to indian

const hun=10001230;
console.log(hun.toLocaleString());

console.log(hun.toLocaleString('en-IN'));       // indian methods

console.log(a.valueOf());                       // gives the value in number

                                                // can use typeof to see 
