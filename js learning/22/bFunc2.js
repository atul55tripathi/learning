// using arithematic functions

function adder(x,y)
{
    console.log(x+y);
}

adder(3,4);

// problem will come when the two argument not sure to be number

adder(4,"5");

// so we can write check for checking whether the given number 
// is number or not

function onlyAN(x,y)
{
    if(typeof x=="number"&& typeof y=="number")
    {
        console.log(x+y);
    }
    else{
        console.log(`invalid inputs to the fucntion`);
    }
}

onlyAN(5,6);
onlyAN(5,"6");
onlyAN("5",6);
onlyAN("5","6");

