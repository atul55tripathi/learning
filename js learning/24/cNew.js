// this function tries to get value from some function
// and if that value is not there, then default value or 
// so other function can be called to get the value

let val= null ?? 5;

console.log(val);

// executing with example

function try1()         // first try
{
    return null;
}

function try2()         // second try
{
    return try1();
}

function def()          // default value
{
    return 5;
}
// preference k hisab se value save
let x= try1() ?? try2() ?? def();       // jiski value pehle, wo save hoga


console.log(x);

// ?? is made for null and undefined

// ternary operator

x>4? console.log("greater than 4"): console.log("less than 4");

