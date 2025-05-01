import Stack from '../data-structures/stack';

export function decimalToBinary(decNumber: number) {
  const remStack = new Stack<number>();
  let number = decNumber;
  let remainder: number;
  let binaryString = '';

  while (number > 0) {
    remainder = Math.floor(number % 2);
    remStack.push(remainder);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

export function baseConverter(decNumber: number, base: number) {
  const remStack = new Stack<number>();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let remainder: number;
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (number > 0) {
    remainder = Math.floor(number % base);
    remStack.push(remainder);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}
