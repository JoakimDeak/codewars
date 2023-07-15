const checkers = {
  digitWithZeroes: (number) => /^[1-9]{1}[0]+$/.test(number),
  sameDigits: (number) => /^(.)\1+$/.test(number),
  sequentialAsc: (number) => {
    const digits = number.toString().split('');
    for (let i = 0; i < digits.length - 1; i++) {
      if (Number(digits[i + 1]) !== (Number(digits[i]) + 1) % 10) {
        return false;
      }
    }
    return true;
  },
  sequentialDesc: (number) => {
    const digits = number.toString().split('');
    for (let i = 0; i < digits.length - 1; i++) {
      if (Number(digits[i + 1]) !== (Number(digits[i]) - 1) % 10) {
        return false;
      }
    }
    return true;
  },
  palindrome: (number) => number.toString().split('').reverse().join('') === number.toString(),
  awesomePhrase: (number, awesomePhrases) => awesomePhrases.some((phrase) => phrase === number)
};

function checkNum(number, awesomePhrases) {
  if (number <= 99) {
    return false;
  }
  const checkFunctions = Object.values(checkers);
  if (checkFunctions.some((checker) => checker(number, awesomePhrases))) {
    return true;
  }
}

function isInteresting(number, awesomePhrases) {
  for (let i = 0; i <= 2; i++) {
    if (checkNum(number + i, awesomePhrases)) {
      return i > 0 ? 1 : 2;
    }
  }
  return 0;
}
