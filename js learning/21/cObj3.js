// the attributes to objects can be created after creation of the object

let ob={};

ob.name="Atul";

console.log(ob);

// we can also make objects inside objects

ob.ob2={
    name:"rajveer",
    otherN:"rajat"
}

console.log(ob);

// how to get the key names in object as array
console.log(Object.keys(ob));

// get there respective values
console.log(Object.values(ob));

// get both key value pair in array
console.log(Object.entries(ob));

// check whether it has some attribute or not
console.log(ob.hasOwnProperty("name"));

console.log(ob.hasOwnProperty("fame"));