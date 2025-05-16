import { defaultEquals } from '../util';
import { Node } from './models/linked-list-models';

export default class LinkedList<T> {
  protected count: number;

  protected head: Node<T>;

  protected equalsFn: (a:T, b:T) => boolean;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element: T): void {
    const node = new Node(element);

    if (this.head === undefined) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== undefined) {
        current = current.next;
      }
      current.next = node;
    }

    this.count++;
  }

  removeAt(index: number): T {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  getElementAt(index: number): Node<T> {
    if (index >= 0 && index < this.count && index != null) {
      let current = this.head;

      for (let i = 0; i < index; i++) {
        current = current.next;
      }

      return current;
    }

    return undefined;
  }

  insert(element: T, index: number): boolean {
    if (index < 0 || index > this.count) {
      return false
    }

    const node = new Node(element);

    if (index === 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous.next;

      node.next = current;
      previous.next = node;
    }
    
    this.count++;
    return true;
  }

  indexOf(element: T): number {
    let current = this.head;
    for (let i = 0; i < this.count && current !== undefined; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element: T): T {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  clear(): void {
    this.count = 0;
    this.head = undefined;
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  getHead(): Node<T> {
    return this.head;
  }

  toString(): string {
    if (this.head === undefined) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current !== undefined; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
