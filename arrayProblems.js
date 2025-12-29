
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


