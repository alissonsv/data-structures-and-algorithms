import LinkedList from './linkedList';
import { DoublyNode } from './models/linkedListModels';
import { defaultEquals } from '../util';

export default class DoubleLinkedList<T> extends LinkedList<T> {
  protected head: DoublyNode<T>;
  protected tail: DoublyNode<T>;

  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  push(element: T): void {
    const node = new DoublyNode(element);
    
    if (this.head == null){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  insert(element: T, index: number): boolean {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;

      if (index === 0) {  // First node
        if(this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
        }
      } else if (index === this.count){ // Last node
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index: number): T {
    if(index >= 0 && index < this.count) {
      let current = this.head;

      if(index === 0) { // First node
        this.head = current.next;
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) { // Last item
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  clear(): void {
    super.clear();
    this.tail = undefined;
  }

  getTail(): DoublyNode<T> {
    return this.tail;
  }

  inverseToString(): string {
    if (this.size() === 0){
      return '';
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    
    while(previous != null) {
      objString = `${objString}, ${previous.element}`;
      previous = previous.prev;
    }
    return objString;
  }
}