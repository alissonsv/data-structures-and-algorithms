export default class Deque<T> {
  private highestKey: number;

  private lowestKey: number;

  private items: object;

  constructor() {
    this.highestKey = 0;
    this.lowestKey = 0;
    this.items = {};
  }

  addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestKey > 0) {
      this.lowestKey--;
      this.items[this.lowestKey] = element
    } else {
      for (let i = this.highestKey; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.highestKey++;
      this.lowestKey = 0;
      this.items[0] = element;
    }
  }

  addBack(element: T) {
    this.items[this.highestKey] = element;
    this.highestKey++;
  }

  removeFront():T {
    const result = this.items[this.lowestKey];
    delete this.items[this.lowestKey]

    this.lowestKey++;

    return result;
  }

  removeBack():T {
    const result = this.items[this.highestKey - 1];

    this.items[this.highestKey - 1] = undefined;
    this.highestKey--;

    return result;
  }

  peekFront():T {
    return this.items[this.lowestKey];
  }

  peekBack():T {
    return this.items[this.highestKey - 1];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.lowestKey = 0;
    this.highestKey = 0;
  }

  size(): number {
    return this.highestKey - this.lowestKey;
  }

  toString():string {
    if (this.isEmpty()) {
      return '';
    }

    let objString = this.items[0];
    for (let i = 1; i < this.highestKey; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}
