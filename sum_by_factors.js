// Given an array of positive or negative integers

//  I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.
// Example:

// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]

// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

//     It can happen that a sum is 0 if some numbers are negative!

// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

//     In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
const max = (...nums) => {
  return nums.reduce((prev, curr) => (Math.abs(curr) > prev ? Math.abs(curr) : prev), 0);
};
function sumOfDivided(lst) {
  const sieve = [];
  const primes = [];
  for (let i = 2; i <= max(...lst); i++) {
    if (!sieve[i]) {
      primes.push(i);
      for (let j = i << 1; j <= max(...lst); j += i) {
        sieve[j] = true;
      }
    }
  }

  const result = [];

  lst.forEach((number) => {
    const factors = new Set();

    let i = 0;
    let quotient = Math.abs(number);
    while (quotient >= primes[i]) {
      while (quotient % primes[i] === 0) {
        factors.add(primes[i]);
        quotient /= primes[i];
      }
      i++;
    }

    factors.forEach((factor) => {
      const factorIndex = result.findIndex((el) => el[0] === factor);
      if (factorIndex >= 0) {
        result[factorIndex][1] = result[factorIndex][1] + number;
      } else {
        result.push([factor, number]);
      }
    });
  });
  result.sort((a, b) => a[0] - b[0]);
  return result;
}

console.log(sumOfDivided([15, 21, 24, 30, 45, 1032, 32789]));
