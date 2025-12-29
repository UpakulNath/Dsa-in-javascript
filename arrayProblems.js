

let arr = [1, 2, 4, 7, 7, 5];
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

console.log(largest, secondLargest);