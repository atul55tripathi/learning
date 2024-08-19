// singleton

// object literals

const user1={
    name:"Atul",
    age: 24
};

console.log(user1.name);
console.log(user1["name"]);

user1.age=25;

console.log(user1.age);

// we can freeze the values, they will remain unchanged
// and also will not give error on changing

Object.freeze(user1);

user1.age=26;

console.log(user1.age);

// adding a number to object;


let user2={
    great: function(){
        console.log("hello Atul");
    }
}

console.log(user2.great());

// this will also print undefined
// the function is called, that prints hello
// but there is nothing is returns hence undefined is printed
// in console log

user2.great();      // this is directly using this function

user2.func= function(){
    console.log("new function");
}

user2.func();

console.log(user2);

user2.num=5;

console.log( user2);

// the data members can be added like this
// freez karne se add nhi hora the first wale me

