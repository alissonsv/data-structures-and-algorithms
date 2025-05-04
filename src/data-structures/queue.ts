export default class Queue<T> {
  private highestKey: number;

  private lowestKey: number;

  private items: object;

  constructor() {
    this.highestKey = 0;
    this.lowestKey = 0;
    this.items = {};
  }

  enqueue(element: T) {
    this.items[this.highestKey] = element;
    this.highestKey++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestKey];
    delete this.items[this.lowestKey]
    this.lowestKey++;

    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestKey];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.highestKey - this.lowestKey;
  }

  clear() {
    this.items = {};
    this.highestKey = 0;
    this.lowestKey = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestKey]}`;
    for (let i = this.lowestKey + 1; i < this.highestKey; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}
