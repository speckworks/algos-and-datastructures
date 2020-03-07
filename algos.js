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