function linearSearch(arr, elem) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === elem) return i // returns index of matching element
  }
  return -1
}

function binarySearch(arr, elem) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end)/2)
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((start + end)/2)
  }
  return arr[middle] === elem ? middle : -1 // returns index of matching element
}

function naiveSearch(long, short) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i+j]) break
      if (j == short.length - 1) count++
    }
  }
  return count
}