//
// Objects, Interfaces, and API's
//

let dog = {
    name: "Steve",
    color: "brown",
    breed: "pug",
    size: "small",
    bark: function(typeOfBark){
        console.log("Bark!");
    },
};

dog.bark();


//
//Application Programing Interface
//

//passing by value
//passing by reference

function x(y){
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
}
x(y);
console.log(y);

//a function cannot run on its own, so having a log in a function alone won't do anything.
//you need to call the function, so logging the function will log the value as well as
//the log that's inside the function

