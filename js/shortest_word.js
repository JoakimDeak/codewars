// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
function findShort(s) {
  return s.split(' ').reduce((prev, curr) => (curr.length < prev ? curr.length : prev), Number.MAX_VALUE);
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
