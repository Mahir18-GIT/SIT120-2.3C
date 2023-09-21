console.log("Hello Javascript");

let variable1 = "String Value";
let variable2 = 10;
let variable3 = 13;
let variableboolean = true;


console.log(variable1)

console.log(variable2 + variable3);
console.log(variable1 + variable2);
console.log(variable3 + variable1);
// Arrays
let myArray = [1, 2, 3];
let myStringArray = ['hello', 'world'];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

// Array Methods
console.log(myArray.length)

// Function

function addFunction(value1, value2)
{
    let sum = value1 + value2;
    return sum;
}

console.log(addFunction(3,4));

function subtractFunction(value3, value4)
{

    let sub = value3 - value4;
    return sub;
}

console.log(subtractFunction(6,3));

function mulFunction(value5, value6 )
{

    let mul = value5 * value6;
    return mul;
}

console.log(mulFunction(5,5));

let university = "Deakin University";

if (university=== "Deakin University") {
    console.log("That's Right!")
}
else {
    console.log("That's Wrong!")
}