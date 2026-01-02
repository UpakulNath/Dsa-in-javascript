
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



