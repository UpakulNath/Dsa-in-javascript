//selection sort

/*
let arr = [13, 46, 24, 52, 20, 9, 34, 65, 1, 32, 2];
let length = arr.length;

for (let i = 0; i <= length - 2; i++) {
  let minEleIdx = i;

  for (let j = i; j <= length - 1; j++) {
    if (arr[j] < arr[minEleIdx]) minEleIdx = j;
  }

  let temp = arr[i];
  arr[i] = arr[minEleIdx];
  arr[minEleIdx] = temp;
}

console.log(arr);
*/

//Bubble sort

/*
let arr = [9, 13,42, 20, 46, 52];
let length = arr.length

for (let i = length - 1; i >= 1; i--){

    let hasSwapped = false
    for (let j = 0; j <= i - 1; j++){
        if (arr[j + 1] < arr[j]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            hasSwapped = true
        }
    }
    if (!hasSwapped) break
    console.log("run");
    
}

console.log(arr);
*/


//Insertion sort
/*
let arr = [14, 9, 15, 12, 6, 8, 13]

for (let i = 1; i <= arr.length - 1; i++){

  let j = i
  let temp;
  while (j > 0 && arr[j - 1] > arr[j]) {
     temp = arr[j]
    arr[j] = arr[j - 1]
    arr[j - 1] = temp
    j--
  }

}

console.log(arr);
*/


//Merge Sort
/*
let arr = [3, 1, 2, 4, 1, 5, 2, 6, 4]
function mergeSortDiv(arr, low, high) {
  if (low >= high) return 
  
  let mid = Math.floor((low + high) / 2);
  
  mergeSortDiv(arr, low, mid)
  mergeSortDiv(arr, mid + 1, high)
  merge(arr, low, mid, high)
}

function merge(arr, low, mid, high) {
  let temp = []
  let left = low
  let right = mid + 1

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left])
      left++
    } else {
      temp.push(arr[right])
      right++
    }
  }

  while (left <= mid) {
    temp.push(arr[left])
    left++
  }

  while (right <= high) {
    temp.push(arr[right])
    right++
  }

  for (let i = low; i <= high; i++){
    arr[i] = temp[i - low]
  }

  
}

mergeSortDiv(arr, 0, arr.length - 1);
console.log(arr);
*/




