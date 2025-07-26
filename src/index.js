module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number === 0) return 'zero';

  let result = '';
  let remainder = number;

  if (remainder >= 100) {
    result += `${ones[Math.floor(remainder / 100)]} hundred`;
    remainder %= 100;
    if (remainder > 0) result += ' ';
  }

  if (remainder >= 20) {
    result += tens[Math.floor(remainder / 10)];
    if (remainder % 10 > 0) {
      result += ` ${ones[remainder % 10]}`;
    }
  } else if (remainder >= 10) {
    result += teens[remainder - 10];
  } else if (remainder > 0) {
    result += ones[remainder];
  }

  return result;
};
