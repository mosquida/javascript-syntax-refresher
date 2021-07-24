// HIGHER ORDER FUNCTIONS
//  function that accepts functions as parameters and/or returns a function.

// array methods - map, filter, reduce
arr = [1,2,3,4];

// for every iteration, set the value to x and  apply this function
let map = arr.map( (x) => return x );

// filter, return if condition is true
let filter arr.filter( (x) => {
    return x % 2 === 0;
});

// 
let reduce = arr.reduce( (accumulator, current) => {
    return accumulator + current; 
});