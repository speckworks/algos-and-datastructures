// Heap is a binary tree with some specific rules
// 1. Must be complete binary tree 
  // All nodes on a level must be filled before adding to another level
// 2. Parent child relationship must be defined
  // Max Heap: All parent elements must be larger than both their child elements
  // Min Heap: All parent elements must be smaller than either of their child elements

function heapify (arr, length, i) {
  let largest = i
  let left = i * 2 + 1
  let right = left + 1

  if (arr[left] > arr[largest]) {
    largest = left
  }

  if (arr[right] > arr[largest]) {
    largest = right
  }

  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]

    heapify(arr, length, largest)
  }
  return arr
}

// Heapsort: non-stable, comparison based sorting algorithm
  // 1. Build a max heap, element with greatest value at top
  // 2. Switch it with last element and remove from heap
  // 3. Repeat steps 1 and 2 until heap has one element left

function heapSort(arr) {
  let length = arr.length
  let i = Math.floor(length / 2 - 1)
  let k = length - 1

  while (i >= 0) {
    heapify(arr, length, i)
    i--
  }

  while (k >= 0) {
    [arr[0], arr[k]] = [arr[k], arr[0]]
    heapify(arr, k , 0)
    k--
  }
  return arr
}