import SortedLinkedList from '../../../src/data-structures/chapter6/sorted-linked-list';

let list: SortedLinkedList<number>;

function insertElements() {
  list.insert(1);
  list.insert(2);
  list.insert(3);
}

describe('Sorted Linked List', () => {
  beforeEach(() => {
    list = new SortedLinkedList<number>();
  });

  describe('Insert element', () => {
    it('add element at index 0 when there is no elements using insert', () => {
      list.insert(1);
      expect(list.size()).toBe(1);
      expect(list.getElementAt(0).element).toBe(1);
    });

    it('add element at the middle of the list using insert', () => {
      insertElements();
      list.insert(2);
      expect(list.toString()).toBe('1, 2, 2, 3');
    });

    it('add element at index 0 when there is no elements using push', () => {
      list.push(99);
      expect(list.size()).toBe(1);
    });

    it('add element at the middle of the list using "push"', () => {
      insertElements();
      list.push(2);
      expect(list.toString()).toBe('1, 2, 2, 3');
    });
  });
});
