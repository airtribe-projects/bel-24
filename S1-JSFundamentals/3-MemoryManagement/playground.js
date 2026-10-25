/* Execution Context: An environment to manage the exection of the code
    Knows the variables
    Where the present exectution is
    It manages the function call

*/
// let name = "Rahul";

// function greet() {
//     let message = "Hello";
//     console.log(message);
// }

// greet();
/* 2 Types of exectuion context: 
1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
*/



/* Phases of Execution Context
1. Creation Phase
- JS prepares everything before execution starts
During this phase
- memory allocation
    - function are stored
    - Variables are registered

2. Execution Phase
- Variables are assigned values
- JS runs your code line by line

*/



// let x = 10;

// function greet() {
//   let y = 20;
// }

// greet();


// Hoisting

console.log(x);
console.log(y);

var x = 10;
let y = 10;