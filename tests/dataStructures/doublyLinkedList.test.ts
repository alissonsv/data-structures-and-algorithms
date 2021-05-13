import DoubleLinkedList from '../../src/dataStructures/doublyLinkedList';
import { DoublyNode } from '../../src/dataStructures/models/linkedListModels';

describe('Doubly Linked List', () => {
  let list: DoubleLinkedList<number>;

  beforeEach(() => {
    list = new DoubleLinkedList<number>();
  });

  describe('Add elements', () => {
    it('add two elements and get its size', () => {
      expect(list.isEmpty()).toBeTruthy();
      expect(list.size()).toBe(0);

      list.push(1);
      expect(list.size()).toBe(1);
      list.push(2);
      expect(list.size()).toBe(2);
    });

    it('add element at nth index', () => {
      list.push(1);
      list.push(2);
      expect(list.size()).toBe(2);

      const result = list.insert(35, 1);
      expect(result).toBeTruthy();
      expect(list.size()).toBe(3);
    });

    it('add element at index 0', () => {
      list.insert(1, 0);
      expect(list.size()).toBe(1);
      list.insert(0, 0);
      expect(list.size()).toBe(2);
    });

    it('add elements at last index', () => {
      expect(list.insert(1, 0)).toBeTruthy();
      expect(list.insert(2, 1)).toBeTruthy();
      expect(list.insert(3, 2)).toBeTruthy();
      expect(list.insert(4, 3)).toBeTruthy();
      expect(list.size()).toBe(4);
    });

    it('should not insert element if index out of list range', () => {
      expect(list.insert(1, -1)).toBeFalsy();
      expect(list.insert(1, 2)).toBeFalsy();

      expect(list.size()).toBe(0);
    });
  });

  describe('Remove elements', () => {
    it('add two elements, remove element by index and get its value', () => {
      expect(list.isEmpty()).toBeTruthy();
      list.push(1);
      list.push(2);
      expect(list.size()).toBe(2);

      let element = list.removeAt(1);
      expect(element).toBe(2);
      expect(list.size()).toBe(1);

      element = list.removeAt(0);
      expect(element).toBe(1);
      expect(list.size()).toBe(0);

      element = list.removeAt(0);
      expect(element).toBeUndefined();
    });

    it('add some elements and remove the element at index 0', () => {
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.removeAt(0)).toBe(1);
      expect(list.removeAt(0)).toBe(2);
      expect(list.removeAt(0)).toBe(3);
    });

    it('remove elements at middle of the list', () => {
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      expect(list.removeAt(1)).toBe(2);
      expect(list.removeAt(1)).toBe(3);
    });

    it('add two elements, remove element by value and return it', () => {
      expect(list.isEmpty()).toBeTruthy();
      list.push(1);
      list.push(35);
      expect(list.size()).toBe(2);

      const element = list.remove(35);
      expect(element).toBe(35);
      expect(list.size()).toBe(1);
    });
  });

  describe('Clear List', () => {
    it('cleans the list and return void', () => {
      list.push(1);
      list.push(2);
      expect(list.size()).toBe(2);
      list.clear();
      expect(list.size()).toBe(0);
      expect(list.getHead()).toBeUndefined();
      expect(list.getTail()).toBeUndefined();
    });
  });

  describe('Get element', () => {
    it('Return a node at given index', () => {
      list.push(1);
      list.push(2);
      list.push(3);

      const response = list.getElementAt(1);
      expect(response).toBeInstanceOf(DoublyNode);
      expect(response.element).toBe(2);
    });

    it('Get index of element', () => {
      list.push(1);
      list.push(2);

      expect(list.indexOf(1)).toBe(0);
      expect(list.indexOf(2)).toBe(1);
      expect(list.indexOf(64)).toBe(-1);
      expect(list.indexOf(null)).toBe(-1);
    });

    it('get index out of range must return undefined', () => {
      list.push(1);
      expect(list.getElementAt(-1)).toBeUndefined();
      expect(list.getElementAt(2)).toBeUndefined();
      expect(list.getElementAt(null)).toBeUndefined();
    });

    it('get the node at head', () => {
      list.push(1);

      const node = list.getHead();
      expect(node).toBeInstanceOf(DoublyNode);
      expect(node.element).toBe(1);
    });

    it('get the node at its tail', () => {
      list.push(1);
      list.push(2);
      list.push(3);

      const node = list.getTail();
      expect(node).toBeInstanceOf(DoublyNode);
      expect(node.element).toBe(3);
    });
  });

  describe('Get list to string', () => {
    it('return empty string if list is empty', () => {
      expect(list.toString()).toBe('');
      expect(list.inverseToString()).toBe('');
    });

    it('return items as string', () => {
      list.push(1);
      list.push(2);
      expect(list.toString()).toBe('1, 2');
      list.push(3);
      expect(list.toString()).toBe('1, 2, 3');
    });

    it('return string with items in reversed order', () => {
      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.inverseToString()).toBe('3, 2, 1');
    });
  });
});
