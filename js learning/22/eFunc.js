// printing attributes


function Print(x)
{
    if("name" in x)
    console.log(x.name);
    if("age" in x)
    console.log(x.age);
    if("sex" in x)
    console.log(x.sex);
}

let user={
    name:"Atul",
    age:24
}

Print(user);

Print({
    name:"Rahul",
    age: 30,
    sex: "Female"
})