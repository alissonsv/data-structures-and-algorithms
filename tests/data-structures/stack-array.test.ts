import Stack from '../../src/data-structures/stack-array';

describe('Stack array', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('Assert return true if stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('Add two numbers and get the last one', () => {
    stack.push(5);
    stack.push(8);

    expect(stack.peek()).toBe(8);
  });

  test('Add three elements and return size of three and false to isEmpty', () => {
    stack.push(3);
    stack.push(6);
    stack.push(2);

    expect(stack.size()).toBe(3);
    expect(stack.isEmpty()).toBe(false);
  });

  test('add then remove element and return right size', () => {
    stack.push(5);
    stack.push(10);
    stack.push(77);
    stack.pop();

    expect(stack.size()).toBe(2);
  });

  test('Clear the stack array', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.isEmpty()).toBeFalsy();
    stack.clear();
    expect(stack.isEmpty()).toBeTruthy();
  });
});
