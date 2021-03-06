// VARIABLES
// data types are automatically assigned
// acts as data storage, vars points to object or memory address
var x = 23; // global
x = "xyz";
x = 'xyz';
x = true;
const y = 23; // static, no re-assignment
let z = 23; // scope based



// OBJECTS
// properties and values
// collection of grouped variables or obj
let person = {
    name: "me",
    age: 1,
    single: true,
    address: {
        province: "Cavite",
        country: "Philippines"
    }
}
console.log(JSON.stringify(person)) //object are JSON by default, convert to str to print

console.log(person.name); //access obj properties
console.log(person.address.county);

console.log(Object.values(person)); //print all obj values



// LOGICAL OPERATORS
// ==(equal) ===(abs equal) &&(and) ||(or)

// COMPARISON OPERATORS
// > < = !(not)



// CONDITIONALS
// only triggered if condition is true, otherwise "else" will triggered
if (z > 1) {

} else if (false) {

} else {

}



// SWITCH
let key = 1;

switch (key) {
    case 1:
        console.log(1);
        break;

    default:
        console.log(0);
        break;
}



// ARRAYS
let scores = [3, 5, 1, 9];
console.log(scores[0]); // prints 3

// LOOPS
// traditional for loop
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

// enhanced for loop - foreach variant
for (let score of scores) {
    console.log(score);
}

// Using Arrays Object - foreach variant
// "for each iteration, do this function"
scores.forEach((score, index) => {
    console.log(index + score);
});

// while loop
let a = 5;

while (a > 0) {
    console.log(a);
    number -= 1; //decrement
} 

// do while loop
// guaranteed to run once
let b = 5;

do {
    console.log(b);
    number -= 1; // shorthand decrement
} while (b > 0);



// BREAK AND CONTINUE = works only inside loops
// break => stops the loop immediately,
// then go to outside and proceed to next statement
for (score of scores) {
    if (score == 1) break; // if 1 statement only, ommmit braces
}

// continue => stops the code for current iteration only, 
// proceed again on top of loop for next iteration
for (score of scores) {
    if (score > 1) continue; // if 1 statement only, ommmit braces
}


// FUNCTIONS
// block of codes, set of statements to accomplish one task
function add(x, y = 3) {
    return x + y;
}

console.log(add(1,2)); //prints 3
console.log(add(1)); //prints 4,
console.log(add(1, y=3)); //prints 4, use param to set val if both has init val


// built ins - see mdn ref docs for more
"test".toUpperCase();


// TYPE COERCION
// 1 == "1" , converted to number then compares
// 1 === "1" , compares directly(also checks the data type)
// use triple as default when comparing



// CALLBACKS 
// - callbacks are the default of async javascript, see asynchronous.js for language updates
// callbacks is a function passed as parameter to other function, and this callback is called in the future
// is a function that gets executed inside other function

function theCallback(name) {
    console.log("Hi" + name)
}

function withCallbackFunction (name, theCallback) {
    theCallback(name)
}

withCallbackFunction("Carl", theCallback);

