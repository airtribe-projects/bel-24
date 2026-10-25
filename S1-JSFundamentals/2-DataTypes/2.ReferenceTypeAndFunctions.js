// # Array
// <!-- Java -->

// // new int[10]

// let arr =[]
// let arr1 = new Array(3)

// arr[0]= "Jay"
// arr[1] = 1;
// arr[2] = false;
// arr[400] = 100;
// arr[345] = "Chakra"


// console.log(arr);

// // Object 
// // Similar to Map (Key, Value)

// const obj = {
//     key: 100, 
//     key1: "Jay"
// }


// console.log(obj, obj.key, obj["key1"])



// const arr = [1,2];
// const clone = arr;

// clone[1] = 10

// console.log(arr, clone);



// const obj = {
//     "key": 100, 
//     "key2": 200
// }

// const cloneObj = obj;

// obj.key = 2;
// console.log(obj, cloneObj);

// Spread Operator (Shallow copy)
// const arr = [1,2];
// const clone = [...arr];

// clone[1] = 10

// console.log(arr, clone);

// const obj = {
//     "key": 100, 
//     "key2": 200
// }

// const cloneObj = {...obj};

// obj.key = 2;
// console.log(obj, cloneObj);




// const arr = [1,[2,3], 4, 5];
// const clone = [...arr];

// arr[1][0] = 5;

// console.log(arr, clone);

// // 

// function greetMe(name) {
//     return `Hello ${name}`;
// }

// console.log(greetMe("Jay"));

// HoF (Higher Order Function)
// - Whenever a function takes a function as an argument or return function as a value, those functions are called HoF

// function cookFood(order) {
//     console.log("Cooking your:" , order);
// }


// function serveDrinks(drinksOrder) {
//     console.log("Serving drinks:" , drinksOrder);
// }

// function Restaurant(cookFood, serveDrinks, orderType, order) {
//     if (orderType == "Food") {
//         cookFood(order);
//     } else if (orderType == "Drinks") {
//         serveDrinks(order);
//     }
// }


// Restaurant(cookFood, serveDrinks, 'Food', "Pizza");
// Restaurant(cookFood, serveDrinks, 'Drinks', "Coke");


// Examples of HoF
//  forEach

const arr = [1,2,3,4,5,6];

// for (let i=0; i< arr.length; i++ ) {
//     console.log(arr[i]);
// }

// function printAllOddNumbers(num) {
//     if (num% 2 == 1) {
//         console.log(num);
//     }
// }

// arr.forEach(printAllOddNumbers);

// arr.forEach((num) => {
//     if (num% 2 == 1) {
//         console.log(num);
//     }
// });

/* Map
returns 1:1 mapping in the form of an array

*/

function square(num) {
    return num*num;
}

// const squareArray = arr.map(square).map(square);

// console.log(squareArray)


/*  Filter
 It filters out elements on conditions and only the filtered items are returned
 */

// const isEvenNumber = (num) => {
//     return num % 2 == 0;
// }

// const result = arr.filter(isEvenNumber).map(square).map(square);

// console.log(result);

/* Reduce
Given an array you want to reduce it to a single data point
*/ 


// let sum = 0;
// for (let i = 0; i< arr.length; i++) {
//     sum = sum + arr[i];
// }


console.log(sum);
const sum = (prevSum, currentValue) => {
    return prevSum + currentValue;
}

const result = arr.reduce(sum, 0);
const result2 = arr.filter(isEvenNumber).map(square).map(square).reduce(sum, 0)
// console.log(result);


const arr = [1, [2,3], [3,4,5]];
const return = [1, 2, 3, 3, 4, 5]

