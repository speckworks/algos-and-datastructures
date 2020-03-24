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

let findPrimesFaster = (target) => {
  // edge cases
  if (target && Number.isInteger(target) && target > 2) {
    let record = []
    let primes = [2]
    let max = Math.sqrt(target)

    // save truthy value to 'record' for each num between 2 & target
    for (let num = 0; num < target; num++) {
      record.push(1)
    }

    // sieve algorithm
    for (let prime = 3; prime <= max; prime += 2) {
      if (record[prime]) {
        for (let multiple = prime*prime; multiple < target; multiple += prime*2) {
          record[multiple] = 0
        }
      }
    }
    // if its prime, push it to prime
    for (let sievedNum = 3; sievedNum < target; sievedNum += 2) {
      if (record[sievedNum]) {
        primes.push(sievedNum)
      }
    }
    return primes
  }
  return 'Please enter an integer greater than two'
}

// Instagram Sticker Problem
// a sticker has the string 'instagram'
// given a string, how many stickers do we need to create the string
function instagramSticker(phrase) {
  let string = 'instagram'
  let insta = {}
  for (let char of string) {
    insta[char] ? insta[char]++ : insta[char] = 1
  }
  let count = 0
  let word = {}
  let sentence = phrase.split(' ').join('')
  for (let char of sentence) {
    word[char] ? word[char]++ : word[char] = 1
  }
  for (let char in word) {
    let amount = Math.ceil(word[char]/insta[char])
    if (amount > count) count = amount
  }
  return count
}

// return unique anagrams solution
function funWithAnagrams(text) {
  let check = {}
  let original = []
  for (let word of text) {
    let sorted = word.split('').sort().join('')
    if (!check[sorted]) {
      check[sorted] = true
      original.push(word)
    }
  }
  return original.sort()
}