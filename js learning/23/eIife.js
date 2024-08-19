// Immediately Invoked Function Expressions

// immediately exucute the function declared here

function chai()
{
    console.log("db connected");
}
chai();

// instead of calling after that like this... we can also do is

(function(){
    console.log("ye hi function hai jo apne app call hora");
})();