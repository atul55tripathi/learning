// suppose there ise a array of charecters, ya fir string
// baari baari print krna hai uski values
// baar baar console log likhne se accha
// ek function bna le

let printer= function(x){
    console.log(x);
}

// this can also be created how it is created in c++
// function printer(x)
//  { console.log(x); return x;}

let FullName="Atul Tripathi";

// now printing it charecter by charecter using printer

for(let x=0;x<FullName.length;x++)
{
    printer(FullName[x]);
}
