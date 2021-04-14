import Deque from '../../data-structures/deque';

describe('Deque', () => {
  let deque: Deque<number>;

  beforeEach(() => {
    deque = new Deque<number>();
  });

  test('should add an element at front and get its size', () => {
    deque.addFront(1);
    expect(deque.size()).toBe(1);
  });

  test('should add an element at back and get its size', () => {
    deque.addBack(1);
    expect(deque.size()).toBe(1);
  });

  test('should add two elements and remove from the front', () => {
    deque.addBack(1);
    deque.addBack(2);
    expect(deque.size()).toBe(2);
    deque.removeFront();
    expect(deque.size()).toBe(1);
  });

  test('should add two elements and remove from the back', () => {
    deque.addBack(1);
    deque.addBack(2);
    expect(deque.size()).toBe(2);
    deque.removeBack();
    expect(deque.size()).toBe(1);
  });

  test('should add two elements and get the element at front', () => {
    deque.addFront(1);
    deque.addFront(2);
    expect(deque.peekFront()).toBe(2);
  });

  test('should add two elements and get the element at back', () => {
    deque.addFront(1);
    deque.addFront(2);
    expect(deque.peekBack()).toBe(1);
  });

  test('should return true if deque is empty', () => {
    expect(deque.isEmpty()).toBeTruthy();
  });

  test('should add two elements and clear the deque', () => {
    deque.addFront(1);
    deque.addFront(2);
    expect(deque.isEmpty()).toBeFalsy();
    deque.clear();
    expect(deque.isEmpty()).toBeTruthy();
  });

  test('should add two elements and get the deque size', () => {
    expect(deque.size()).toBe(0);
    deque.addFront(1);
    deque.addFront(2);
    expect(deque.size()).toBe(2);
  });

  test('should add two elements and get its string', () => {
    deque.addFront(1);
    deque.addFront(2);
    expect(deque.toString()).toBe('2, 1');
  });

  test('should return an empty string if deque is empty', () => {
    expect(deque.toString()).toBe('');
  })
})