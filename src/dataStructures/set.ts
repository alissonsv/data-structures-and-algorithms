export default class Set<T> {
  private items: any;

  constructor() {
    this.items = {};
  }

  has(element: T): boolean {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element: T): boolean {
    if(!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element: T): boolean {
    if(this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  clear(): void {
    this.items = {};
  }

  size(): number {
    return Object.keys(this.items).length;
  }

  values(): T[] {
    return Object.values(this.items);
  }

  union(otherSet:Set<T>): Set<T> {
    const unionSet = new Set<T>();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }

  intersection(otherSet: Set<T>): Set<T> {
    const intersectionSet = new Set<T>();
    const values = this.values();
    const otherSetValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherSetValues;

    if(otherSetValues.length >= values.length) {
      biggerSet = otherSetValues;
      smallerSet = values;
    }

    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  }

  difference(otherSet: Set<T>): Set<T> {
    const differenceSet = new Set<T>();
    this.values().forEach(value => {
      if(!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  isSubsetOf(otherSet: Set<T>): boolean {
    if (this.size() > otherSet.size()) {
      return false;
    }

    let isSubset = true;
    this.values().every(value => {
      if(!otherSet.has(value)){
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}