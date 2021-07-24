// NAMED EXPORTS / IMPORTS
// allows to export multiple values


// FILE 1
// exports to allow other module/file to use var, obj, funcs or any value
export x = 1;

// FILE 2
// import declares we are using exported values from other module
import f2 from 'FILE2' 
console.log(f2.x);

import { x } from 'FILE2' // with object destructure, to select only specific exported value(var, funcs, etc)
console.log(f2.x);

import * as file2 from 'FILE2' // with alias("as" newName)
console.log(file2.x);




// DEFAULT EXPORT / IMPORTS
// allows us export single value, used in classes and objects

// FILE 1
export default class Person {
    getPlanet() {
        return "Earth"
    }
}

// FILE 2
import Person from "FILE2";
let joe = new Person();
console.log( joe.getPlanet() ); 