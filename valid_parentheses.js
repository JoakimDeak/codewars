// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100
function validParentheses(parens) {
  let controlCount = 0;
  for (let i = 0; i < parens.length; i++) {
    const currChar = parens[i];
    if (currChar === '(') {
      controlCount++;
    } else if (currChar === ')') {
      controlCount--;
    }
    if (controlCount < 0) {
      return false;
    }
  }
  return controlCount === 0;
}
console.log(validParentheses('('));
