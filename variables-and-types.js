/*
 *Variables, Data Types, and Typing
 */

let wordData;
wordData = "This Is A List Of Words That Appear To Coincide To Create A Sentence " +
    "This Is A Coincidence ";

console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = subTotal + tax;

console.log(totalWithTax);


//
//Data Types
//
//primitive - boolean, nul, undefined, number (int, float), string
//composite - object( key + value)

let obj = {
    key1: "value",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "internal object value",
    }
};

console.log(obj.key1);
console.log(obj.obj2.obj2Key1);


//
//typing systems
//
//static - programmer has to tell program what data type is, string, num, etc
//js is a dynamic lang
//strong or weak
//strong - cannot convert different data types
//weak - lang will try to convert string to num for ex
//

let variable = "string";

let var1 = "2"
let var2 = 5
let result = var1 + var2;

console.log(result);
//js converted num 5 to string and got "2" + 5 = 25

//operators
let add = 1+2;
let sub = 2-1;
let mult = 2*4;
let div = 6/3;
let mod = 5%2;

let string = "string 1 " + "string 2";

console.log(string);

let ice = 3.5
let tea = 1.5
let lotion = 12
let sharpie = 2
let wipes = 4.9

console.log(ice - tea);
console.log(wipes * sharpie);
console.log(lotion % tea);
console.log(lotion + wipes);
console.log(ice / tea);