// if else se kaise manupulate hota hai

function NumPr(x)
{
    if(x)
    {
        console.log(x);
    }
    else{
        console.log(`invalid input`);
    }
}

NumPr(5);

NumPr();        // undefined is treated as false

NumPr("");      // khali string is treated as false

NumPr(null);    // null is treated as false

// we can also give default values

function Pr(x= "Atul")
{
    console.log(x);
}

Pr("Raj");
Pr();           // still works