const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  return str.match(/(..?)/g)

}

const reverse = (str) => {
  // write code for strings.reverse
  splitIt = str.split('')
  reverseIt = splitIt.reverse()
  reverseWord = reverseIt.join('')
  return reverseWord;
}

module.exports = {
  split,
  pairs,
  reverse
}