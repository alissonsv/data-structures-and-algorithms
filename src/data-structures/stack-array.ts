export default class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(...elements: T[]) {
    this.items.push(...elements);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}
