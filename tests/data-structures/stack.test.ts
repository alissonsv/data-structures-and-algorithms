import Stack from '../../src/data-structures/stack';

describe('Stack class', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('should return true if empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('should push two elements and get size', () => {
    stack.push(5);
    stack.push(2);

    expect(stack.size()).toBe(2);
  });

  test('should delete last item in stack', () => {
    expect(stack.pop()).toBeUndefined();

    stack.push(2);
    stack.push(5);
    stack.push(7);

    expect(stack.pop()).toBe(7);
  });

  test('should return last item in stack', () => {
    expect(stack.peek()).toBeUndefined();

    stack.push(4);
    stack.push(5);
    expect(stack.peek()).toBe(5);
  });

  test('should clear the stack', () => {
    stack.push(2);
    stack.push(33);

    stack.clear();

    expect(stack.isEmpty()).toBe(true);
  });

  test('should return a string in toString', () => {
    expect(stack.toString()).toEqual('');

    stack.push(1);
    stack.push(2);

    expect(stack.toString()).toBe('1, 2');
  });
});
