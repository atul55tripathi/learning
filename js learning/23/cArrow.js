// this is a keyword which tell about the current context

const user={
    name: "Atul",
    age: 24
}

// now I want to add the function which will 
// print the values of object directly

user.pr= function(){
    console.log(`the name is ${this.name} and the age is:${this.age}`);
}

user.pr();

// iss wale ki values de dega
// current context ki values de dega


// node be this print krne se khali ayega {}
// lekin browser me window
// window is a global object

const chai= () =>
{
    console.log("hello");
}

chai();