// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html
// Examples

// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros

// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
function zeros(n) {
  const sigma = (start, end, modifier) => {
    return Array.from({ length: end - start + 1 }, (_, k) => (modifier ? modifier(k + start) : k + start)).reduce((a, b) => a + b, 0);
  };
  const log = (base, number) => Math.log(number) / Math.log(base);
  return sigma(1, Math.floor(log(5, n)), (i) => Math.floor(n / Math.pow(5, i)));
}
console.log(zeros(12)); // 2
console.log(zeros(6)); // 1
console.log(zeros(30)); // 7
