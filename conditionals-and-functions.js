//
//equals - 1 === 1
//greater than - 5 > 1
//less than - 5 < 9
//greater than equals - 5 >= 5
//less than equals - 4 <= 9
//not equal - 5 !== 2
//


let storeA = 4.23
let storeB = 4.23

function CompareStorePrices (storeA, storeB) {
    if (storeA < storeB) {
        console.log("Store A has better deal.")
    } else if (storeB < storeA) {
        console.log("Store B has better deal.");
    } else {
        console.log("Both stores have the same prices.")
    }
}

CompareStorePrices(storeA, storeB);

function SquareNum (number) {
    return number * number;
}

let SquaredNum = SquareNum(12);
console.log(SquaredNum);

//functions should only do one thing and be less than 20 lines

//scope - Global scope, function scope, block scope
//global variables can be used anywhere but get overridden when used in a function
//Global > Function > block

let x = 10;

function addNumbers (n, m, x) {
    console.log(x);
    let a;
    if (1 === 1) {
        let a = 8;
    }
    console.log(a);
    return n + m;
}

//arrays

let OurArray = [1,2,3,4,5,6,7,8,9,10];
console.log(OurArray[0])

let arrLen = OurArray.length;

//for (counter; comparison; incrementer){ }
for (let i = 0; i<arrLen; i++){
    console.log("i is equal to " + i);
    console.log(OurArray[i]);
}

//while loops

let b = 0;
while (b < 10){
    console.log("ran");
    b = b + 1;
}