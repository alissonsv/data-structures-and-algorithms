export default class Queue<T>{
  private count: number;
  private items: object;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  enqueue(element: T) {
    this.items[this.count] = element;;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[0];
    for (let i = 0; i < this.count; i++) {
      this.items[i] = this.items[i + 1];
    }
    this.count--;

    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}