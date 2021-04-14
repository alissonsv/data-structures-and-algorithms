export default class Deque<T> {
  private count: number;
  private items: object;

  constructor() {
    this.count = 0;
    this.items = {};
  }


  addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.items[0] = element;
      this.count++;
    }
  }

  addBack(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    for (let i = 0; i < this.count; i++) {
      this.items[i] = this.items[i + 1];
    }

    this.count--;
  }

  removeBack() {
    this.items[this.count] = undefined;
    this.count--;
  }

  peekFront() {
    return this.items[0];
  }

  peekBack() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  size() {
    return this.count;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = this.items[0];
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}