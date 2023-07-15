// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'

// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
// function sumStrings(a, b) {
//   return String(Object.values(arguments).reduce((prev, curr) => prev + Number(curr), 0));
// }
function sumStrings(a, b) {
  let sum = '';
  let carry = 0;
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const one = a.length - i > 0 ? a[a.length - i - 1] : 0;
    const two = b.length - i > 0 ? b[b.length - i - 1] : 0;
    const partialSum = Number(one) + Number(two) + carry;
    sum = (partialSum % 10) + sum;
    carry = partialSum >= 10 ? 1 : 0;
  }
  if (carry) {
    sum = 1 + sum;
  }
  return sum.slice(/[1-9]/.exec(sum).index);
}
console.log(sumStrings('1', '23')); // 24
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')); // '712577413488402631964821329'
console.log(sumStrings('800', '9567')); // 10367
console.log(sumStrings('00103', '08567')); // 8670
