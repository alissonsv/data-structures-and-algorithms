import Queue from '../../src/data-structures/queue';

describe('Queue', () => {
  let queue: Queue<number>;
  
  beforeEach(() => {
    queue = new Queue();
  });

  test('should insert a new number to queue', () => {
    queue.enqueue(3);
    expect(queue.size()).toBe(1);
  });

  test('should return undefined when delete a number from an empty deque', () => {
    expect(queue.dequeue()).toBe(undefined);
  });

  test('should delete a number from the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  test('should return the first element in queue', () => {
    expect(queue.peek()).toBeUndefined();

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  test('should return true if queue is empty', () => {
    expect(queue.isEmpty()).toBeTruthy();

    queue.enqueue(1);
    expect(queue.isEmpty()).toBeFalsy();
  });

  test('should return the queue size', () => {
    expect(queue.size()).toBe(0);

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
  })

  test('should clear queue after add some numbers', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).toBe(3);

    queue.clear();
    expect(queue.size()).toBe(0);
  });

  test('should return proper string with elements', () => {
    expect(queue.toString()).toBe('');

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.toString()).toBe('1, 2');
  })
})