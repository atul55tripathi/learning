let Name="Atul Tripathi"
let age = 24;

// we can write using + symbol which will concatenate

console.log("Hello "+ Name +" welcome to the year when your age is "+ age);


// this can also be done by using string interpolation
// bas placeholders ko unki jagah pr lgana

// we make placeholders in interpolation and directly jo bhi variable likhna hai daal de

console.log(`hello ${Name} welcome to the year when your age is ${age}`);

// to use other functions like to upper is easiar this way

// this is the object way of creating string

let a=new String("hello");

//sirf a ko console me likh kr string k kitne methods hote hai wo 
// dekh sakte hai


console.log(a[4]);          // index wise access

console.log(a.toString());  // original string

console.log(a.length);      

console.log(a.toUpperCase());   // orignal value is not changes

console.log(a.charAt(2));       // iss index pe charecter konsa hai

console.log(a.indexOf('o'));    //returns the first index

const newString=a.slice(1,4);   // konse index se, konse index tak se pehle

console.log(newString);

const newB=a.substring(3,4);

console.log(newB);          // slice jaise hi, same index to index
