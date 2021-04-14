import Deque from '../../src/data-structures/deque';

describe('Deque', () => {
  let deque: Deque<number>;

  beforeEach(() => {
    deque = new Deque<number>();
  });

  describe('Add elements', () => {
    it('add an element at front and get its size', () => {
      deque.addFront(1);
      expect(deque.size()).toBe(1);
    });
  
    it('add an element at back and get its size', () => {
      deque.addBack(1);
      expect(deque.size()).toBe(1);
    });
  });

  describe('Remove elements', () => {
    test('add two elements and remove from the front', () => {
      deque.addBack(1);
      deque.addBack(2);
      expect(deque.size()).toBe(2);
      deque.removeFront();
      expect(deque.size()).toBe(1);
    });
  
    test('add two elements and remove from the back', () => {
      deque.addBack(1);
      deque.addBack(2);
      expect(deque.size()).toBe(2);
      deque.removeBack();
      expect(deque.size()).toBe(1);
    });

    test('add one element and remove from the front', () => {
      deque.addBack(1);
      expect(deque.size()).toBe(1);
      const element = deque.removeFront();
      expect(element).toBe(1);
      expect(deque.size()).toBe(0);
    });

    test('add one element and remove from the back', () => {
      deque.addBack(1);
      expect(deque.size()).toBe(1);
      const element = deque.removeBack();
      expect(element).toBe(1);
      expect(deque.size()).toBe(0);
    });
  });

  describe('Get elements', () => {
    test('add two elements and get the element at front', () => {
      deque.addFront(1);
      deque.addFront(2);
      expect(deque.peekFront()).toBe(2);
    });
  
    test('add two elements and get the element at back', () => {
      deque.addFront(1);
      deque.addFront(2);
      expect(deque.peekBack()).toBe(1);
    });
  });

  describe('Check if is empty', () => {
    test('return true if deque is empty', () => {
      expect(deque.isEmpty()).toBeTruthy();
    });
  
    test('add two elements and clear the deque', () => {
      deque.addFront(1);
      deque.addFront(2);
      expect(deque.isEmpty()).toBeFalsy();
      deque.clear();
      expect(deque.isEmpty()).toBeTruthy();
    });

    test('add two elements and get the deque size', () => {
      expect(deque.size()).toBe(0);
      deque.addFront(1);
      deque.addFront(2);
      expect(deque.size()).toBe(2);
    });
  });

  describe('Returns the deque', () => {
    test('add two elements and get its string', () => {
      deque.addFront(1);
      deque.addFront(2);
      expect(deque.toString()).toBe('2, 1');
    });
  
    test('return an empty string if deque is empty', () => {
      expect(deque.toString()).toBe('');
    });
  });
})