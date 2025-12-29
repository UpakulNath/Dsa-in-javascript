/*
let N = 1234567
let counter = 0;

while (N > 0) {
    N = Math.floor(N / 10)
    counter++
}

console.log(counter);
*/

/*
let N = 65358000;
let revNum = 0;
while (N > 0) {
  let digit = N % 10;
  if (digit === 0) {
    N = Math.floor(N / 10);
  } else {
    revNum = revNum * 10 + digit;
    N = Math.floor(N / 10);
  }
}

console.log(revNum);
*/

/*
let N = 43268
let n = String(N)
let startIdx = 0;
let endIdx = n.length - 1
let flag = true

while (startIdx < endIdx) {
  if (n.charAt(startIdx) === n.charAt(endIdx)) {
    startIdx++
    endIdx--
  } else {
    console.log("not pall");
    flag = false
    break
    
  }
  
}
if(flag) console.log("pall");
*/

/*
let [n1, n2, hcf] = [3, 9, 1]

for (let i = Math.min(n1, n2); i >= 1 ;i--){
  if (n1 % i === 0 && n2 % i === 0) {
    hcf = i
    break
  }
}
console.log(hcf);
*/

/*
let num = 153
let newNum = num
let sum = 0
let digits = String(num).length
while (newNum > 0) {
  let digit = newNum % 10
  sum += Math.pow(digit, digits)
  newNum = Math.floor(newNum / 10)
}

if (num == sum) {
  console.log("armstrong");
  
} else {
  console.log("Not armstrong");
  
}
*/

/*
let num = 12
for (let i = 1; i <= num; i++){
  if (num % i === 0) {
    console.log(i);
    
  }
}
*/

/*
let num = 12;
let factNums = [];

for (let i = 1; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    factNums.push(i);
    if (i !== num / i) {
      factNums.push(num / i);
    }
  }
}

factNums.sort((a, b) => a - b);
console.log(factNums);
*/

/*
function isPalindrome(num) {
  if (num < 0) return false; // negative numbers aren't palindromes

  let original = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return original === reversed;
}
*/

/*
let n = 3
let Name = "upakul"

function recursiveCall(Name, n) {
  if (n < 1) return 
  console.log(Name);
  
  recursiveCall(Name, n - 1)
}

recursiveCall(Name, n)
*/

/*
let n = 4
let count = 1

function printNums(count, n) {
  if (n < count) return 
  console.log(n);
  n--
  
  printNums(count, n)
  
}

printNums(count, n)
*/


/*
let n = 10
let sum = 0
count = 1

function sumOfNaturalNums(n, sum, count) {
  if (count > n) return sum
  sum += count
  count ++
  return sumOfNaturalNums(n, sum, count)
  
}

let newSum = sumOfNaturalNums(n, sum, count)
console.log(newSum);
*/

/*
let fact = 1
let n = 4

function calcFact(num){
  if (num < 1) return 1
  
  return num * calcFact(num - 1)
}

fact = calcFact(n)
console.log(fact);
*/

/*
let arr = [1, 2, 3, 4]
let startIdx = 0
let endIdx = arr.length - 1

while (startIdx < endIdx) {
  arr[startIdx] += arr[endIdx]
  arr[endIdx] = arr[startIdx] - arr[endIdx]
  arr[startIdx] -= arr[endIdx]

  startIdx++
  endIdx--
console.log(arr);
}
*/

/*
let arr = [1, 2, 3, 4,423, "abc"]
let startIdx = 0
let endIdx = arr.length - 1

while (startIdx < endIdx) {
  [arr[startIdx], arr[endIdx]] = [arr[endIdx], arr[startIdx]]
  startIdx++
  endIdx--
}

console.log(arr);
*/

/*
let n = 6
let firstTerm = 0
let secondTerm = 1


console.log(firstTerm, secondTerm);

for (let i = 0; i < n - 1; i++){
  let nextTerm = firstTerm + secondTerm
  console.log(nextTerm);
  firstTerm = secondTerm
  secondTerm = nextTerm
  
}
*/


/*
function calcFibonacci(n) {
  if(n === 0) return 0
  if (n === 1) return 1
  
  return calcFibonacci(n - 1) + calcFibonacci(n - 2)
}

let res = calcFibonacci(5)
console.log(res);
*/


/*
let arr = [2, 2, 3, 3,3,3,4, 4, 2];
let mp = new Map()


for (let ele of arr) {
  mp.set(ele, (mp.get(ele) || 0) + 1)
}

let maxFreq = -Infinity,
  minFreq = Infinity;
let maxKey, minKey;

for (let [key, freq] of mp) {
  if (freq > maxFreq) {
    maxFreq = freq;
    maxKey = key;
  }

  if (freq < minFreq) {
    minFreq = freq;
    minKey = key;
  }
}
console.log(maxKey, minKey);
*/





