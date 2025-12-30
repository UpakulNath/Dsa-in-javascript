
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


