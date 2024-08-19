// ... is both, rest and spreat operator
// name is given on the basis of how it is called

// using rest operator in function to take values

function cal(...nums)
{
    console.log(nums);
}

cal(1,2,3,4,5,6,7);


// the function can take also like

function cal2(x,y,z,...nums)
{

}

// storing first 3 in the variables respectively
// remaining are kept in array