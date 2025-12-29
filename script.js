// Q1
// Swap two variables without using a third variable

let num1 = 5;
let num2 = 10;

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

// console.log(`num1 =  ${num1}`);
// console.log(`num2 =  ${num2}`);

// Q2
// Convert a string "123" to a number using 3 different ways

// console.log(Number("123"));
// console.log(parseInt("123"));
// console.log(parseFloat("123"));

// Q3
// Check if a number is positive, negative, or zero

// let num = -9
// if (num > 0) {
//     console.log("positive")
// } else if (num < 0) {
//     console.log("negative");

// } else {
//     console.log("zero");

// }

// Q4
// Given a year, check if it's a leap year

// let year = 1900
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log("leap year");

//         } else {
//             console.log("not a leap year");

//         }
//     } else {
//         console.log(" a leap year");

//     }
// } else {
//     console.log("not a leap year");
// }

// Q5
// Print numbers from 1 to 100 that are divisible by both 3 and 5

// for (let i = 0; i <= 100; i++){
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i);

//     }
// }

// Q6
// Reverse a string using a loop

// let str = "upakul"
// let newStr = ""
// for (let i = str.length - 1; i >= 0 ; i--){
//     newStr += str.charAt(i)
// }
// console.log(newStr);

// Q7
// Write a function that takes an array and returns its sum

// let arr = [1, 2, 3, 5]
// function addEleOfArray(array) {
//     return arr.reduce((acc, num) => acc + num, 0)
// }
// console.log(addEleOfArray(arr));

// Q8
// Write an arrow function to check if a string is a palindrome

// (str) => {
//   str = str.toLowerCase();
//   let reversed = str.split("").reverse().join("");
//   return reversed === str;
// };


// Q9
// Find the maximum element in an array (without Math.max)

// let arr = [1, 2, 3, 4]
// let max = 0
// for (let i = 0; i <= arr.length - 1; i++){
//     if(arr[i] > max) max = arr[i]
// }
// console.log(max);
// arr = arr.sort()
// console.log(arr[arr.length - 1]);


// Q10
// Remove duplicates from an array

// let arr = [1, 2, 2, 3,4,3,2,1, 4]
// for (let i = 0; i < arr.length ; i++){
//     for (let j = i + 1; j < arr.length  ; j++){
//         if (arr[i] === arr[j]) {
//             arr.splice(j, 1)
//             j--
//         }
//     }
// }
// console.log(`arr: ${arr}`);


// Q11
// Count occurrences of each character in a string

// let str = "upakul";
// let charObj = {};

// for (let i = 0; i < str.length; i++) {
//   let charCount = 0;
//   for (let j = 0; j < str.length; j++) {
//     if (str.charAt(i) === str.charAt(j)) { // use ===
//       charCount++;
//     }
//   }
//   charObj[str.charAt(i)] = charCount;
// }

// console.log(charObj);
// Output: { u: 2, p: 1, a: 1, k: 1, l: 1 }
//o(n^2)

// let str = "upakul";
// let charObj = {};

// for (const ch of str) {
//   charObj[ch] = (charObj[ch] || 0) + 1;
// }
//o(n)

// Q12
// Find the second largest number in an array

// let array = [1, 2, 3, 4, 21];

// array.sort((a, b) => a - b);
// console.log(array[array.length - 2]); // 4 ✅


// Q13
// Check if a given number is a prime number

// let num = 59
// let ctr = 0
// for (let i = 2; i < Math.sqrt(num); i++){
//     if (num % i == 0) {
//         ctr++
//         console.log("not prime");
//         break;
//     }
// }
// if (ctr == 0) {
//     console.log("prime");
    
// }

// Q14
// Generate Fibonacci sequence up to n terms

// let n = 10
// let firstTerm = 0
// let secondTerm = 1
// console.log(firstTerm);
// console.log(secondTerm);



// for (let i = 0; i < n - 1; i++){
//     let nextTerm = firstTerm + secondTerm
//     firstTerm = secondTerm
//     secondTerm = nextTerm
//     console.log(nextTerm);
    
// }


// Q15
// Find factorial of a number using recursion

// function calcFactorial(number) {
//     if (number < 1) return 1
    
    
//     return calcFactorial(number-1) * number
// }

// console.log(calcFactorial(5));


// Q16
// Find missing number from 1 to n in an array
// Example: [1, 2, 4, 5] → missing = 3
// let array = [1,2,4]
// for (let i = 0; i < array.length; i++){
//     if (array[i] !== i + 1) {
//         console.log(`missing: ${i + 1}`);
//         break
//     }
// }

//refactor the above code

// Q1
// Sort an array of numbers in ascending order
// Input: [5, 2, 9, 1, 7] → Output: [1, 2, 5, 7, 9]

// let array = [5, 2, 9, 1, 7]

// console.log(array.sort());


// Q2
// Sort an array of strings by their length
// Input: ["apple", "kiwi", "banana", "grape"] → Output: ["kiwi", "grape", "apple", "banana"]

// let fruits = ["apple", "kiwi", "banana", "grape"];

// fruits.sort((a, b) => a.length - b.length);
//If result < 0 → a comes before b
//If result > 0 → a comes after b
//If result = 0 → order stays the same
// console.log(fruits);


// Q3
// Sort an array of objects by 'age' property
// Input: [{name: "A", age: 30}, {name: "B", age: 25}] → Output: sorted by age

// let arrObj = [
//   { name: "A", age: 30 },
//   { name: "B", age: 25 },
// ];

// arrObj.sort((a, b) => a.age - b.age)
// console.log(arrObj);

// Sort array [10, 2, 33, 21, 100] so that it behaves correctly as numbers (not strings)

// let arr = [10, 2, 33, 21, 100]
// arr.sort((a, b) => a - b)
// console.log(arr);

// Q6
// Convert "hello world" → ["hello", "world"]

// let str = "hello world"
// str = str.split(" ")
// console.log(str);

// Q7
// Reverse each word in a sentence using split() and join()
// Input: "I love JS" → Output: "I evol SJ"

// let str = "I love JS"
// str = str.split(" ")
// let newStr = ""
// for (let i = 0; i < str.length; i++){
//     let word = str[i].split("")
//     word.reverse()
//     word = word.join()
//     newStr += word
// }

// console.log(newStr);

//mycode and ai code

// let str = "I love JS"
// str = str.split(" ")
// let newStr = ""

// for (let i = 0; i < str.length; i++) {
//   let word = str[i].split("").reverse().join("")
//   newStr += word + " "
// }

// console.log(newStr.trim())

// Q8
// Count the number of words in a sentence using split()

// let str = "My name is Upakul Nath"
// let count = 0

// str = str.split(" ")
// for (let i = 0; i < str.length; i++){
//     count++
// }

// console.log(count);

// Q9
// Convert array ["H", "E", "L", "L", "O"] → "HELLO"

// let arr = ["H", "E", "L", "L", "O"];
// arr = arr.join("")
// console.log(arr);

// Q10
// Convert "1-2-3-4-5" → "1,2,3,4,5"

// let str = "1-2-3-4-5";
// str = str.join(-)
//.join() works only on array
  
// let arr = str.split("-")
// arr = arr.join()
// console.log(arr);

// Q11
// Extract first 3 elements of [1,2,3,4,5] using slice()

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(0, 3));

// Q12
// Use slice() to get last 2 elements of an array

// let arr = [1, 2, 3, 4, 5,6 ,7];
// console.log(arr.slice(arr.length - 2));

// Q13
// Use splice() to remove the middle element from [10,20,30,40,50]
// let arr = [10, 20, 30, 40, 50];

// console.log(arr.splice(2,1));


// Q14
// Use splice() to insert numbers 15 and 25 between 10 and 30 in [10,30,40]
// let arr = [10, 30, 40];
// arr.splice(1, 0, 15, 25)
// console.log(arr);

// Q15
// Use splice() to replace 2 elements starting from index 1 in [1,2,3,4,5] with [10,20]


// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2, [10, 20])
// console.log(arr);

// Q16
// Given [1,2,3,4], return a new array where each number is doubled

// let arr = [1, 2, 3, 4]
// let newArr= arr.map((e) => {
//     return e * 2
    
// })
// console.log(newArr);

// Q17
// Convert an array of strings to their lengths
// Input: ["apple", "kiwi", "banana"] → Output: [5, 4, 6]

// let arr = ["apple", "kiwi", "banana"];
// let newArr = arr.map((e) => e.length)
// console.log(newArr);

// Q18
// Add 5 marks to every student's score: [70, 80, 90] → [75, 85, 95]
// let arr = [70, 80, 90]
// let newArr = arr.map((e) => e + 5)
// console.log(newArr);

// Q19
// Convert ["10", "20", "30"] → [10, 20, 30]

// let arr = ["10", "20", "30"]
// let newArr = arr.map((e) => Number(e))
// console.log(newArr);

// Q20
// Given array of objects [{price:100}, {price:200}], return an array of just prices
// let arr = [{ price: 100 }, { price: 200 }];
// let newArr = arr.map((e) => e.price)
// console.log((newArr));

// Q21
// Return only even numbers from [1,2,3,4,5,6]
// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = arr.filter((num) => num % 2 === 0)
// console.log(newArr);


// Q22
// Return all names longer than 4 letters from ["Sam", "John", "Alex", "Chris"]

// let arr = ["Sam", "John", "Alex", "Chris"];
// let newArr = arr.filter((names) => names.length > 4)
// console.log(newA);




// Q23
// Filter out negative numbers from [10, -3, 5, -9, 0]

// let arr = [10, -3, 5, -9, 0];
// let newArr = arr.filter((num) => num >= 0)
// console.log(newArr);

// Q24
// From [{age:18}, {age:25}, {age:16}], return only adults (age >= 18)

// let arr = [{ age: 18 }, { age: 25 }, { age: 16 }];
// let newArr = arr.filter((ele) => ele.age > 18)
// console.log(newArr);

// Q25
// From an array [2,4,6,8,10], filter out numbers divisible by 4

// let arr = [2, 4, 6, 8, 10]
// let newArr = arr.filter((ele) => ele % 4 === 0)
// console.log(newArr);

// Q26
// Find the sum of all elements in [1,2,3,4,5]

// let arr = [1, 2, 3, 4, 5]
// let sum = arr.reduce((acc, num) => acc + num, 0)
// console.log(sum);

// Q27
// Find the maximum number using reduce()

// let arr = [20,2,33, 89,54]
// let maxNum = arr.reduce((acc, num) =>  num > acc ? num : acc, 0)
// console.log(maxNum);


// Q28
// Multiply all numbers in [2,3,4] → Output: 24

// let arr = [2, 3, 4]
// let product = arr.reduce((acc, num) => acc * num, 1)
// console.log(product);

// Q29
// Count total characters in an array of strings ["hi", "js", "rocks"]
// let arr = ["hi", "js", "rocks"];
// let totalCharacters = arr.reduce((acc, str) => str.length + acc, 0)
// console.log(totalCharacters);


// Q30
// Flatten an array [[1,2],[3,4],[5]] → [1,2,3,4,5]

// let arr = [[1, 2], [3, 4], [5]];
// let flattenedArr = arr.reduce((acc, currArr) => acc.concat(currArr), [])
// console.log(flattenedArr);

// Q31
// Given a string "5,10,15,20,25", find the sum of all numbers using split(), map(), reduce()

// let str = "5,10,15,20,25"
// str = str.split(",").map((ele) => Number(ele))
// let newStr = str.reduce((acc, num) => acc + num, 0)
// console.log(newStr);


// Q32
// Given an array of names ["anna", "bob", "alice", "john"],
// return only names that start with 'a' and make them uppercase

// let arr = ["anna", "bob", "alice", "john"];
// arr = arr.filter((ele) => ele[0] === 'a').map((el) => el.toUpperCase())
// console.log(arr);

// function greet(name) {
//   console.log("Hello " + name);
// }

// let names = ["Anna", "Bob", "John"];
// names.forEach(greet);


// Q33
// Take array [1, 2, 3, 4, 5]
// - double every number
// - keep only numbers > 5
// - find their sum

// let arr = [1, 2, 3, 5, 2, 3]
// console.log(arr.sort());


// arr = arr.map((ele) => ele * 2).filter((el) => el > 5).reduce((acc, num) => acc + num, 0)
// console.log(arr);


// Q34
// Given ["Hello World", "JS Rocks", "Frontend Dev"],
// return array of word counts → [2, 2, 2]

// let arr = ["Hello World", "JS Rocks", "Frontend Dev"];

// let $nam = "upa"
// console.log($nam);

// sayHi(); // ❌ Error: sayHi is not a function

// const sayHi = function () {
//   console.log("Hi!");
// };

// console.log(this);

function showThis() {
  console.log(this);
}
// showThis();
/* Node.js wraps every file you write inside a module system.
So your code isn’t actually running in the global scope — it’s running inside a special wrapper function like this:

(function (exports, require, module, __filename, __dirname) {
  // your code here
})();


Inside that wrapper, this refers to exports (which starts as {}), not global.

🧩 Example 2: Inside a regular function (not a method)
function showThis() {
  console.log(this);
}
showThis();


✅ Output in Node.js:

global


That’s because inside a regular function, when called normally, this points to the global object in non-strict mode (just like in browsers).

If you use strict mode:

"use strict";
function showThis() {
  console.log(this);
}
showThis(); // undefined


Now this becomes undefined. */

const person = {
  name: "Abhinav",
  age: 22,
  city: "Delhi",
};

const { age, name, city } = person;

console.log(name); // Abhinav
console.log(age); // 22
console.log(city);








