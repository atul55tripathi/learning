// the closure is the property by which 
// the variables from the outer scope are accessible inside the 
// inner function

function hel(){
    let x="hello world";

    function del(){
        console.log(x);
    }

    del();

}

hel();

// now learning hoisting

// ppo()        // will give error for any let,const, var of ppo
var ppo= function()
{
    console.log("printing hori bohot bhayankr");
}

ppo();

// the following will not give error
po();

function po()
{
    console.log("po wala printing karra");
}

po();