import { decimalToBinary, baseConverter } from '../../src/others/baseConverter';

describe('decimalToBinary', () => {
  test('Should return binary string of number', () => {
    expect(decimalToBinary(233)).toBe('11101001');
    expect(decimalToBinary(10)).toBe('1010');
    expect(decimalToBinary(1000)).toBe('1111101000');
  })
});

describe('baseConverter', () => {
  test('Should return string with number converted', () => {
    expect(baseConverter(100345, 2)).toBe('11000011111111001');
    expect(baseConverter(100345, 8)).toBe('303771');
    expect(baseConverter(100345, 16)).toBe('187F9');
    expect(baseConverter(100345, 35)).toBe('2BW0');
  });

  test('Should return an empty string if base is >=2 or <=36', () => {
    expect(baseConverter(5142, 1)).toBe('');
    expect(baseConverter(6523, 40)).toBe('');
  });
})