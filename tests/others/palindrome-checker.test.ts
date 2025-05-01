import palindromeChecker from '../../src/others/palindrome-checker';

describe('Palindrome Checker', () => {
  test('Check if the word is a palindrome', () => {
    expect(palindromeChecker('a')).toBeTruthy();
    expect(palindromeChecker('aa')).toBeTruthy();

    expect(palindromeChecker('ab')).toBeFalsy();
    expect(palindromeChecker(undefined)).toBeFalsy();
    expect(palindromeChecker(null)).toBeFalsy();
    expect(palindromeChecker('')).toBeFalsy();
  });
});
