// let animal = {
//   eats: true
// };

// let dog = {
//   bark: true
// };

// Object.setPrototypeOf(dog, animal)

// console.log(dog.eats);

console.log(1)

console.log("Jay")

const type = true;

console.log(type);

console.log(1, "Jay", true)

// "My name is Jay and I am x years old and live in Bangalore"

const name = "Jay"
const age = 35
const city = "Bangalore"


console.log("My name is ", name, " and I am ", age, " years old and live in ", city);

console.log(`My name is ${name} and I am ${age} years old and live in ${city}`);



const users = [
  { name: "Jay", age: 20 },
  { name: "Sam", age: 25 }
];

console.log(users);

console.table(users);

// const start = Date.now();

console.time("Loop");

for (let i = 0; i < 1000000; i++) {}

console.timeEnd("Loop")
// console.log("Execution ended: ", Date.now() - start);




let x = 5 //--> integer
let y = "5" //--> string

console.log(x == y);


console.log(x === y);

if ({}) {
    console.log("It is a truthy value")
}




let fruits = ["Apple", "Banana", "Mango"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }


for (let fruit of fruits) {
    console.log(fruit)
}


for (let fruitIndex in fruits) {
    console.log(fruitIndex, fruits[fruitIndex])
}


let player1 = Symbol('jay');

let player2 = Symbol('jay');

console.log(id1 == id2);
console.log(id1 === id2);