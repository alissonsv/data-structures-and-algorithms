import { defaultEquals } from '../util';
import LinkedList from './linked-list';
import { Node } from './models/linked-list-models';

export default class CircularLinkedList<T> extends LinkedList<T> {
  constructor(equalsfn = defaultEquals) {
    super(equalsfn);
  }

  insert(element: T, index: number): boolean {
    if (index < 0 || index > this.count) {
      return false;
    }

    const node = new Node(element);

    if (index === 0) {
      if (this.head == null) {
        this.head = node;
        node.next = this.head;
      } else {
        node.next = this.head;
        const lastNode = this.getElementAt(this.size() - 1);
        this.head = node;
        lastNode.next = this.head;
      }
    } else {
      const previous = this.getElementAt(index - 1);
      node.next = previous.next;
      previous.next = node;
    }

    this.count++;
    return true;
  }

  push(element: T): void {
    const node = new Node(element);

    if (this.size() === 0) {
      this.head = node;
    } else {
      const lastNode = this.getElementAt(this.size() - 1);
      lastNode.next = node;
    }

    node.next = this.head;
    this.count++;
  }

  removeAt(index: number): T {
    if (index < 0 || index >= this.count) {
      return undefined
    }

    let current = this.head;

    if (index === 0) {
      if (this.size() === 1) {
        this.head = undefined;
      } else {
        const removed = this.head;
        current = this.getElementAt(this.size() - 1); // last node
        this.head = this.head.next;
        current.next = this.head;
        current = removed;
      }
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }

    this.count--;
    return current.element;
  }
}
