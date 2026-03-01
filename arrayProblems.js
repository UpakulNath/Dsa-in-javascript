
/*
let arr = [1];
let largest = -Infinity;
let secondLargest = -Infinity;
let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  }

  if (arr[i] < largest && arr[i] > secondLargest) {
    secondLargest = arr[i];
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
      secondSmallest = smallest;
    smallest = arr[i];
  }

  if (arr[i] > smallest && arr[i] < secondSmallest) {
    secondSmallest = arr[i];
  }
}

console.log(largest, secondLargest, smallest, secondSmallest);
*/

/*
let arr = [5,4,6,7,8]
flag = true
for (let i = 0; i < arr.length - 1; i++){
    if (arr[i] > arr[i + 1]) {
        flag = false
        console.log("false");
        break
    }
}
if(flag)console.log(flag);
*/

/*
let arr = [1, 1, 2, 2, 2, 3, 3];

let i = 0;

for (let j = 1; j < arr.length; j++) {
  if (arr[j] !== arr[i]) {
    i++;
    arr[i] = arr[j];
  }
}

console.log(arr);
*/

//rotate the array towards the left by one

/*
let arr = [-1, 0, 3, 6];
let temp = arr[0]

for (let i = 1; i < arr.length; i++){
  arr[i - 1] = arr[i]
}
arr[arr.length - 1] = temp
console.log(arr);
*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7]
let k = 2
for (let i = 0; i < k; i++){
  let temp = arr[arr.length - 1]
  for (let j = arr.length - 2; j >= 0; j--){
    arr[j + 1] = arr[j]
  }
  arr[0] = temp
}
console.log(arr);
*/

/*
function reverseArray(arr, startIdx, endIdx) {
  while (startIdx < endIdx) {
    let temp = arr[startIdx]
    arr[startIdx] = arr[endIdx]
    arr[endIdx] = temp
    startIdx++
    endIdx--
  }
}

function rotateArray(arr, k, direction) {
  let arrLength = arr.length

  if (arrLength == 0 || k == 0) return
  
  k = k % arrLength

  if (direction.toLowerCase() == "right") {
    reverseArray(arr, 0, arrLength - 1)
    reverseArray(arr, 0, k - 1)
    reverseArray(arr, k, arrLength - 1)
  } else if (direction.toLowerCase() == "left") {
    reverseArray(arr, 0, k - 1)
    reverseArray(arr, k, arrLength - 1)
    reverseArray(arr, 0, arrLength - 1)
  }
  return arr
  
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 2, "left"));
*/

/*
let arr = [ 1, 2, 3, 4, 5]

let i, j
let found = false

for (let k = 0; k < arr.length; k++){
  if (arr[k] === 0) {
    i = k
    j = k + 1
    found = true
    break
  }
}

if (found) {
  
while (j < arr.length) {
  if (arr[i] !== 0) {
    i++
  } 
  if (arr[j] !== 0) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    j++
  } else {
    j++
  }

}

console.log(arr);
} else {
  console.log("no 0 element found");
  
}
*/

/*
let arr = [1, 4, 5]
let num = 23
let found = false

for (let i = 0; i < arr.length; i++){
  if (arr[i] === num) {
    console.log(i);
    found = true
    
  }
}
if(found == false)console.log("-1");
*/

/*
let arr1 = [6, 7, 8, 9, 10];
let arr2 = [2, 3, 4, 4, 5, 11, 12];

let newArr = [];
let i = 0,
  j = 0;

while (i < arr1.length && j < arr2.length) {
  // skip duplicates in both arrays
  while (i > 0 && arr1[i] === arr1[i - 1]) i++;
  while (j > 0 && arr2[j] === arr2[j - 1]) j++;

  if (i >= arr1.length || j >= arr2.length) break;

  if (arr1[i] < arr2[j]) {
    newArr.push(arr1[i++]);
  } else if (arr1[i] > arr2[j]) {
    newArr.push(arr2[j++]);
  } else {
    newArr.push(arr1[i]);
    i++;
    j++;
  }
}

while (i < arr1.length) {
  if (i === 0 || arr1[i] !== arr1[i - 1]) newArr.push(arr1[i]);
  i++;
}

while (j < arr2.length) {
  if (j === 0 || arr2[j] !== arr2[j - 1]) newArr.push(arr2[j]);
  j++;
}

console.log(newArr);
*/

/*
let n = 5
let arr = [1, 2, 4, 5]
let sum = (n * (n + 1)) / 2
let arrSum = 0
for (let ele of arr) arrSum += ele

if (sum === arrSum) {
  console.log("all present");
  
} else {
  console.log(`${sum - arrSum} is absent` );
  
}
*/

/*
let arr = [1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1]
let [maxCount, currentCount] = [0, 0]

for (let i = 0; i < arr.length; i++){
  if (arr[i] === 0) {
    if(currentCount > maxCount)  maxCount = currentCount;
    currentCount = 0
  } else if (arr[i] === 1) {
    currentCount++
  }
  
}
if (currentCount > maxCount) maxCount = currentCount;
console.log(maxCount);
*/

/*
let arr = [4, 1, 2, 1, 4];

for (let i = 0; i < arr.length; i++) {
  let count = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }

  if (count === 1) {
    console.log(arr[i]); // unique element
  }
}
*/

/*
let arr = [4, 1, 2, 1, 4]

let result = 0

for (let ele of arr) {
  result ^= ele
}

console.log(result);
*/


/*
let arr = [10, 0, 2, 7, 1, 9]
let [sum, k, maxLen, left, right] = [10, 15, 0, 0, 0]

while (right < arr.length) {
  
  while (left <= right && sum > k) {
    sum -= arr[left]
    left++
  }

  if (sum === k) {
    maxLen = Math.max(maxLen, right - left + 1)
  }

  right++

  if (right < arr.length) sum += arr[right]
  
}

console.log(maxLen);
*/

/*
let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
let k = 3;

let preSum = 0;
let maxLen = 0;
let map = new Map();

for (let i = 0; i < arr.length; i++) {
  preSum += arr[i];

  // Case 1: subarray from 0 to i
  if (preSum === k) {
    maxLen = i + 1;
  }

  // Case 2: subarray ending at i
  if (map.has(preSum - k)) {
    maxLen = Math.max(maxLen, i - map.get(preSum - k));
  }

  // Store first occurrence only
  if (!map.has(preSum)) {
    map.set(preSum, i);
  }
}

console.log(maxLen);
*/

/*
let arr = [2, 6, 5, 8, 11]
let target = 100

let map = new Map()

for (let i = 0; i < arr.length; i++){
  map.set(arr[i], i)
}
let flag = false

for (let i = 0; i < arr.length; i++){
  if (map.has(target - arr[i])) {
    console.log("YES");
    console.log(i, map.get(target - arr[i]));
    flag = true
    break; 
  }
}

if(!flag) console.log("No\n[-1, -1]");
*/

/*
let arr = [1, 0, 2, 1, 0];
let [zeroCount, oneCount, twoCount] = [0, 0, 0];

// count
for (let ele of arr) {
  if (ele === 0) zeroCount++;
  else if (ele === 1) oneCount++;
  else twoCount++;
}

let i = 0;

// place 0s
while (zeroCount > 0) {
  arr[i++] = 0;
  zeroCount--;
}

// place 1s
while (oneCount > 0) {
  arr[i++] = 1;
  oneCount--;
}

// place 2s
while (twoCount > 0) {
  arr[i++] = 2;
  twoCount--;
}

console.log(arr);
*/

/*
let arr = [7, 0, 0, 0,0,0,0,0,0,1, 7, 7, 2, 7, 7]

let mp = new Map()

for (let ele of arr) {
  mp.set(ele, (mp.get(ele) || 0) + 1)
}

for (let [key, value] of mp) {
  
if(value > Math.floor(arr.length / 2))console.log(key);

}
*/

/*
let arr = [-2, -3, -5, -2, -7, -4]
let sum = 0
let maxSum = 0

for (let i = 0; i < arr.length; i++){
  sum+=arr[i]
  if (sum < 0) sum = 0

  if(sum > maxSum) maxSum = sum
}
if(maxSum === 0) maxSum = arr[0]

console.log(maxSum);
*/

/*
let arr = [7, 6, 4, 3, 1];

let buyingPrice, sellingPrice;
let profit = 0;

for (let i = 0; i < arr.length; i++){
  buyingPrice = arr[i]
  for (let j = i + 1; j < arr.length; j++){
    if (arr[j] > buyingPrice) {
      sellingPrice = arr[j] - buyingPrice
    }

    if (sellingPrice > profit) {
      profit = sellingPrice
    }
  }
}
console.log(profit);
*/

/*
let arr = [7, 1, 5, 3, 6, 4]
let minPrice = arr[0]
let maxProfit = 0

for (let i = 0; i < arr.length; i++){
  if (arr[i] < minPrice) {
    minPrice = arr[i]
  }
  if (arr[i] - minPrice > maxProfit) {
    maxProfit = arr[i] - minPrice
  }
}

console.log(maxProfit);
*/

/*
let arr = [1, 2, -4, -5, 3, -2]
let resultArray = []
let posIndex = 0
let negIndex = 1

for (let i = 0; i < arr.length; i++){
  if ((arr[i] > 0)) {
    resultArray[posIndex] = arr[i]
    posIndex += 2
  } else if ((arr[i] < 0)) {
    resultArray[negIndex] = arr[i]
    negIndex += 2
  }
}

console.log(resultArray);
*/

/*
let arr = [1, 3, 2];
let n = arr.length
let breakpointIdx = -1

function reverseArray(start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

for (let i = n - 2; i >= 0; i--){
  if (arr[i] < arr[i + 1]) {
    breakpointIdx = i
    break
  }
}

if (breakpointIdx === -1) {
  arr.reverse()
}

for (let i = n - 1; i >= breakpointIdx; i--){
  if (arr[i] > arr[breakpointIdx]) {
    let temp = arr[i]
    arr[i] = arr[breakpointIdx]
    arr[breakpointIdx] = temp
    break;
  }
}

reverseArray(breakpointIdx + 1, n - 1)
console.log(arr);
*/

/*
let arr = [4, 7, 1, 0]
let leaderArray = []
let n = arr.length

for (let i = 0; i < n ; i++){
let isLeader = true
  
  for (let j = i + 1; j < n ; j++){
    if (arr[i] < arr[j]) {
      isLeader = false
      break
    }
  }

  if (isLeader) {
    leaderArray.push(arr[i])
  }

}

console.log(leaderArray);
*/

/*
let arr = [4, 7, 1, 0]
let n = arr.length
let max = arr[n - 1]
let leaderArray = [arr[n - 1]];

for (let i = n - 2; i >= 0; i--){
  if (arr[i] > max) {
    max = arr[i]
    leaderArray.push(max)
  }
}
leaderArray.reverse()

console.log(leaderArray);
*/

/*
let arr = [100, 4, 200, 1, 3, 2]
let [count, maxCount] = [0,0]
arr = arr.sort((a, b) => a - b)

for (let i = 0; i < arr.length - 1; i++){
  if (arr[i] + 1 === arr[i + 1]) {
    count++
  } else {
    if (count > maxCount) {
      maxCount = count
      count = 0
    }
  }
  maxCount = Math.max(maxCount, count);
}

console.log(maxCount + 1);
*/

/*
let arr = [100, 4, 200, 1, 3, 2]
let map = new Map()
let count = 0
let maxCount = 0

for (let i = 0; i < arr.length; i++){
  map.set(arr[i], i)
}

for (let i = 0; i < arr.length; i++){
  let currEle = arr[i]
  if (!map.has(currEle - 1)) {
    count = 1
    let nextEle = currEle + 1
    while (map.has(nextEle)) {
      count++
      nextEle++
    }
  }

  if(count > maxCount) maxCount = count
}

console.log(maxCount);
*/

/*
let arr = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]
let row,col

for (let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr.length; j++){
    if (arr[i][j] === 0) {
      row = i
      col = j
      
    }
  }
}

for (let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr.length; j++){
    if (i === row || j === col) {
      arr[i][j] = 0
    }
  }
}

console.log(arr);
*/

/*
let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
]

let row = new Array(3).fill(false)
let col = new Array(4).fill(false)

for (let i = 0; i < matrix.length; i++){
  for (let j = 0; j < 4; j++){
    if (matrix[i][j] === 0) {
      row[i] = true
      col[j] = true
    }
  }
}

for (let i = 0; i < matrix.length; i++){
  for (let j = 0; j < 4; j++){
    if (row[i] || col[j]) {
      matrix[i][j] = 0
    }
  }
}

console.log(matrix);
*/

/*
class Solution {
  // Function to set entire row and column to 0 if an element in the matrix
  setZeroes(matrix) {
    // Get dimensions of matrix
    let m = matrix.length;
    let n = matrix[0].length;

    // Flag to track if first row should be zeroed
    let firstRowZero = false;
    // Flag to track if first column should be zeroed
    let firstColZero = false;

    // Check if first row has any zero
    for (let j = 0; j < n; j++) {
      if (matrix[0][j] === 0) {
        firstRowZero = true;
        break;
      }
    }

    // Check if first column has any zero
    for (let i = 0; i < m; i++) {
      if (matrix[i][0] === 0) {
        firstColZero = true;
        break;
      }
    }

    // Use first row/column as markers
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }

    // Set cells to zero based on markers
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }

    // Zero the first row if needed
    if (firstRowZero) {
      for (let j = 0; j < n; j++) {
        matrix[0][j] = 0;
      }
    }

    // Zero the first column if needed
    if (firstColZero) {
      for (let i = 0; i < m; i++) {
        matrix[i][0] = 0;
      }
    }
  }
}

// Driver code
let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
new Solution().setZeroes(matrix);
console.log(matrix);
*/

/*
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let rows = matrix.length;

for (let i = 0; i < rows; i++) {
  for (let j = i + 1; j < rows; j++) {
    let temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
  }
}

for (let i = 0; i < rows; i++){
  matrix[i].reverse()
}
console.log(matrix);
*/

/*
let arr = [3, 1, 2, 4, 2, 2]
let currSum = 0
let cnt = 0
let k = 4;

for (let i = 0; i < arr.length; i++){
  currSum += arr[i]
  if (currSum === k) {
    cnt++
    currSum = 0
    
  }
}

console.log(cnt);
*/

/*
let arr = [-2, -2, -2, -1, -1, -1, 0,0,0,2,2,2,2]

let i, j, k;
*/


let str = "  Hello world"
str = str.split(" ")
let newStr = ""

for(let i = str.length - 1; i >= 0; i--){
  if(str[str.length - 1] == " " || str[0] == " "){
    continue
  }
  newStr += str[i] + " "

}

console.log(newStr);



