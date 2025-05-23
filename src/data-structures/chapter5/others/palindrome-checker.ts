import Deque from '../deque';

export default function palindromeChecker(aString: string) {
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
    return false;
  }

  const deque = new Deque<string>();
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');
  let isEqual = true;
  let firstChar: string;
  let lastChar: string;

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();

    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}
