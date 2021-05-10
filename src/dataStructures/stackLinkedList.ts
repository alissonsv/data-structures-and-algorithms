import DoublyLinkedList from './doublyLinkedList';

export default class StackLinkedList<T> {
  private items: DoublyLinkedList<T>;

  constructor() {
    this.items = new DoublyLinkedList();
  }

  push(element: T): void {
    return this.items.push(element);
  }

  pop(): T {
    if (this.items.isEmpty()) {
      return undefined;
    }
    return this.items.removeAt(this.items.size() - 1);
  }

  size(): number {
    return this.items.size();
  }

  isEmpty(): boolean {
    return this.items.isEmpty();
  }

  peek(): T {
    return this.items.getTail()?.element;
  }

  clear(): void {
    this.items.clear();
  }

  toString(): string {
    return this.items.toString();
  }
}