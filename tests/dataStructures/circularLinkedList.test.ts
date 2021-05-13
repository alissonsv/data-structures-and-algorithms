import CircularLinkedList from '../../src/dataStructures/circularLinkedList';

describe('Circular Linked List', () => {
  let list: CircularLinkedList<number>;

  beforeEach(() => {
    list = new CircularLinkedList<number>();
  });

  function insertElements() {
    list.push(0);
    list.push(1);
    list.push(2);
  }

  describe('Add elements', () => {
    it('add elements using push', () => {
      list.push(1);
      list.push(2);
      expect(list.size()).toBe(2);
    });

    it('add elements using insert', () => {
      list.insert(1, 0);
      list.insert(2, 0);
      expect(list.size()).toBe(2);
    });

    it('add element at nth index', () => {
      list.insert(1, 0);
      list.insert(2, 1);
      expect(list.size()).toBe(2);

      const result = list.insert(35, 1);
      expect(result).toBeTruthy();
      expect(list.size()).toBe(3);

      expect(list.toString()).toBe('1, 35, 2');
    });

    it('add element at index 0 when there is no elements', () => {
      list.insert(1, 0);
      expect(list.size()).toBe(1);
    });

    it('add element at index 0 when there is one or more elements', () => {
      list.insert(1, 0);
      expect(list.size()).toBe(1);
      list.insert(2, 0);
      expect(list.size()).toBe(2);
      list.insert(3, 0);
      expect(list.size()).toBe(3);
    });

    it('should not insert element if index out of list range', () => {
      expect(list.insert(1, -1)).toBeFalsy();
      expect(list.insert(1, 2)).toBeFalsy();

      expect(list.size()).toBe(0);
    });

    it('next element of last element should be the head', () => {
      list.push(0);
      list.push(1);
      list.push(2);
      const lastNode = list.getElementAt(list.size() - 1);
      expect(lastNode.next).toBe(list.getHead());
    });
  });

  describe('Remove elements', () => {
    it('return undefined if index is < 0 or greater than count', () => {
      insertElements();

      expect(list.removeAt(-1)).toBeUndefined();
      expect(list.removeAt(4)).toBeUndefined();
    });

    it('remove node at index 0 with only one node', () => {
      list.push(1);
      expect(list.removeAt(0)).toBe(1);
      expect(list.getHead()).toBeUndefined();
    });

    it('remove node at index 0 with more than one node', () => {
      insertElements();
      expect(list.removeAt(0)).toBe(0);
      expect(list.size()).toBe(2);
    });

    it('remove node from the middle of the list', () => {
      insertElements();

      expect(list.removeAt(1)).toBe(1);
      expect(list.size()).toBe(2);
    });

    it('remove node at the end of the list', () => {
      insertElements();

      expect(list.removeAt(2)).toBe(2);
      expect(list.size()).toBe(2);
    });
  });
});
