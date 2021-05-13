import { defaultEquals, defaultCompare, Compare } from '../util';
import LinkedList from './linkedList';

export default class SortedLinkedList<T> extends LinkedList<T> {
  protected compareFn: (a: T, b: T) => number;

  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  push(element: T): void {
    if (this.isEmpty()) {
      super.push(element);
    } else {
      const index = this.getIndexNextSortedElement(element);
      super.insert(element, index);
    }
  }

  insert(element: T): boolean {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const index = this.getIndexNextSortedElement(element);
    return super.insert(element, index);
  }

  getIndexNextSortedElement(element: T): number {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}
