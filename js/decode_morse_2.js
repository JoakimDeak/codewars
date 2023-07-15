// from decode morse 1

const MORSE_CODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': "'",
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS'
};
function decodeMorse(morseCode) {
  return morseCode
    .split('   ')
    .map((word) =>
      word
        .split(' ')
        .map((letter) => MORSE_CODE[letter])
        .join('')
    )
    .join(' ')
    .trim();
}

function decodeBits(bits) {
  const getAdjustedDict = (timeUnit) => {
    const base = {
      1: '.',
      0: '',
      111: '-',
      '000': ' ',
      '0000000': '   '
    };
    const dict = {};
    Object.keys(base).forEach((key) => {
      Object.assign(dict, {
        [key.repeat(timeUnit)]: base[key]
      });
    });
    return dict;
  };

  const sections = [];
  let currentSection = '';
  for (let i = 0; i < bits.length; i++) {
    currentSection += bits[i];
    if (i === bits.length - 1 || bits[i + 1] !== bits[i]) {
      sections.push(currentSection);
      currentSection = '';
    }
  }
  if (sections[0][0] === '0') {
    sections.shift();
  }
  if (sections[sections.length - 1][0] === '0') {
    sections.pop();
  }

  const timeUnit = Math.min(...sections.map((section) => section.length));

  const dict = getAdjustedDict(timeUnit);
  return sections.map((section) => dict[section]).join('');
}
console.log(
  decodeMorse(
    decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')
  )
);
console.log(decodeMorse(decodeBits('1')));
console.log(decodeMorse(decodeBits('111')));
console.log(decodeMorse(decodeBits('01110')));
