import StackLinkedList from '../../../src/data-structures/chapter6/stack-linked-list';

describe('Stack Linked List', () => {
  let list: StackLinkedList<number>;

  function insertElements() {
    list.push(1);
    list.push(2);
    list.push(3);
  }

  beforeEach(() => {
    list = new StackLinkedList<number>();
  });

  it('add elements to the list', () => {
    list.push(1);
    expect(list.size()).toBe(1);
    list.push(2);
    expect(list.size()).toBe(2);
    list.push(3);
    expect(list.size()).toBe(3);
  });

  describe('Pop function', () => {
    it('pop the last element from the list', () => {
      insertElements();
      expect(list.size()).toBe(3);

      expect(list.pop()).toBe(3);
      expect(list.size()).toBe(2);
    });

    it('return undefined if the list is empty', () => {
      expect(list.pop()).toBeUndefined();
    });
  });

  it('returns the size of the list', () => {
    expect(list.size()).toBe(0);
    insertElements();
    expect(list.size()).toBe(3);
  });

  it('return true if the list is empty', () => {
    expect(list.isEmpty()).toBeTruthy();
    insertElements();
    expect(list.isEmpty()).toBeFalsy();
  });

  it('peek the last element of the list', () => {
    expect(list.peek()).toBeUndefined();
    insertElements();
    expect(list.peek()).toBe(3);
  });

  it('clear the list', () => {
    insertElements();
    expect(list.size()).toBe(3);

    list.clear();
    expect(list.size()).toBe(0);
  });

  it('return the list as string', () => {
    insertElements();
    expect(list.toString()).toBe('1, 2, 3');
  });
});
