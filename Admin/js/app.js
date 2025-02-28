// console.log(2 + 2);

// console.log(add(10, 30));
// function add(x, y) {
//   return x + y;
// }

// const add2 = (x, y) => x + y;
// console.log(add2(100, 30));

// const add3 = function (x, y, z) {
//   return x + y + z;
// };

// console.log(add3(100, 30, 40));

// const scope = "Global scope";

// function checkScope() {
//   let scope = "Local scope";
//   function nested() {
//     let scope = "Nested";
//     return scope;
//   }
//   return nested();
// }

// const result = nested();
// console.log(result);

// console.log(greeting("Ray"));
// const greeting = (name) => `"Hi" + ${name}`;

// function greeting2(name) {
//   return "Hi " + name;
// }

// const person = {
//   firstName: "rick",
//   lastName: "Johnson",
//   age: 50,
//   eyeColor: "blue",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// // person.age = 30;

// // person.eyeColor = "Brown";
// console.log(person[eyeColor]);

// // delete person.age;

// // console.log(Object.values(person));

// console.log(person.fullName());

// const d = new Date(2021, 11, 24);

// console.log(d);

// const wonky = ["Raheem", "Roger", 1, 2, 3, 4, 5, true, { name: "jim" }, "blue"];

// const person = {
//   firstName: "rick",
//   lastName: "Johnson",
//   age: 50,
//   eyeColor: "blue",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const json = [
//   { name: "ray" },
//   { name: "jim" },
//   { name: "nate" },
//   { name: "time" },
// ];
// for (let i in json) {
//   console.log(json[i]);
// }

// for (let i in person) {
//   console.log(i);
// }

// for (const key in person) {
//   console.log(person[key]);
// }

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr1.length);

// arr1.pop();

// console.log(arr1);

// console.log(arr1.shift());

//adds to beginning
// arr1.unshift(-2);

// //adds to end
// arr1.pop(-2);

//take away first element
// arr1.shift();

// //adds to beginning of array
// arr1.unshift(22);
// console.log(arr1);

// const a = [1, 2, 3]; // a new array with three elements
// const x = a.join(); // “1,2,3”
// const y = a.join(" "); // “1 2 3”
// // const z = a.split("+");

// console.log(z);

// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split(" ");
// console.log(words[7]);

// const nums = [1, 2, 3];

// let a = nums.reverse();

// console.log(a);
// // for (let i of nums) {
// //   console.log(i);
// // }

// a.sort();

// console.log(a);

// const a = [1, 2, 3, 4, 5];

// // const w = a.slice(2); // w = [1, 2, 3]

// // console.log(w);
// const x = a.slice(1, -1); // x = [4, 5]
// console.log(x);
// const y = a.slice(1, -1); // y = [2, 3, 4]
// const z = a.slice(-3, -2); // z = [3]

// const fruits = ["Apple", "Orange", "Grape", "Banana", "Mango"];
const nums = [11, 22, 33, 44, 5, 6, 7, 8];

// let evens = nums.filter((x) => x % 2 === 0);

// console.log(evens);

let odds = nums.filter((x) => x % 2 === 1);

console.log(odds);

odds.forEach((x) => console.log(x * 2));

let newOdds = odds.map((x) => x * 5);

console.log(newOdds);

// let sum = nums.reduce((sum, n) => sum + n, 100);

// console.log(sum);

// let newArr = fruits.map((x) => x);

// let newArr2 = nums.map((x) => x * 2);

// console.log(newArr2);

// fruits.splice(1, 2, "Lemon", "Kiwi");

// console.log(fruits);

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// const person = {
//   firstName: "rick",
//   lastName: "Johnson",
//   age: 50,
//   eyeColor: "blue",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// for (let i in person) {
//   console.log("Key:" + i + "Value:" + person[i]);
// }