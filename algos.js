function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false
  }
  let map = {}
  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    map[letter] ? map[letter]++ : map[letter] = 1
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    if (!map[letter]) {
      return false
    } else {
      map[letter]--
    }
  }
  return true
}

function sumZero(arr) {
  let left = 0
  let right = arr.length
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

function duplicates(...args) {
  args.sort((a,b) => a > b)
  let start = 0
  let next = 1
  while (next < arr.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

// check if parentheses are balanced
let isBalanced = (input) => {
  let brackets = "[]{}()<>"
  let stack = []

  for (let bracket of input) {
    let bracketsIndex = brackets.indexOf(bracket)
    // if bracket is an opening bracket
    if (bracketsIndex % 2 === 0) {
      // push closing bracket's index onto stack
      stack.push(bracketsIndex + 1)
    } else {
      if (stack.pop() !== bracketsIndex) {
        return false
      }
    }
  }
  return stack.length === 0
}

// determine num of operations required to make parentheses balanced
let makeBalanced = (input) => {
  let parenths = input.split('') // convert to arr
  // a counter to keep track of required num of complements
  let rComplement = 0
  let lComplement = 0
  for (let bracket of parenths) {
    // if opening parenths encountered, increase right complement
    if (bracket === '(') {
      rComplement++
    } else { // if closing pareths encoutered
      if (rComplement > 0) {
        rComplement-- // if an opening parenths already exists, decrease right complement
      } else {
        lComplement++ // if no opening parenths already exists, increase left complement
      }
    }
  }
  return rComplement + lComplement
}