import Set from '../../../src/data-structures/chapter7/set';

describe('Set', () => {
  let set: Set<number>;

  beforeEach(() => {
    set = new Set<number>();
  });

  it('add element to the set', () => {
    expect(set.add(1)).toBeTruthy();
    expect(set.add(1)).toBeFalsy();
  });

  it('delete element from the set', () => {
    set.add(1);
    expect(set.delete(1)).toBeTruthy();
    expect(set.delete(1)).toBeFalsy();
  });

  it('checks if element is in the set', () => {
    expect(set.has(1)).toBeFalsy();

    set.add(1);
    expect(set.has(1)).toBeTruthy();
  });

  it('return the set size', () => {
    expect(set.size()).toBe(0);
    set.add(1);
    expect(set.size()).toBe(1);
    set.add(2);
    expect(set.size()).toBe(2);
  });

  it('clean the set', () => {
    set.add(1);
    set.add(2);
    expect(set.size()).toBe(2);

    set.clear();
    expect(set.size()).toBe(0);
  });

  it('return the values of the set', () => {
    expect(set.values()).toStrictEqual([]);
    set.add(1);
    expect(set.values()).toStrictEqual([1]);
    set.add(2);
    expect(set.values()).toStrictEqual([1, 2]);
  });

  it('union two sets', () => {
    const setA = new Set<number>();
    setA.add(1);
    setA.add(2);
    setA.add(3);
    const setB = new Set<number>();
    setB.add(3);
    setB.add(4);
    setB.add(5);
    setB.add(6);

    const unionAB = setA.union(setB);
    expect(unionAB.size()).toBe(6);
    expect(unionAB.values()).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  it('intersects two sets', () => {
    const setA = new Set();
    setA.add(1);
    setA.add(2);
    setA.add(3);
    const setB = new Set();
    setB.add(2);
    setB.add(3);
    setB.add(4);
    setB.add(5);

    const intersectionAB = setA.intersection(setB);
    expect(intersectionAB.values()).toStrictEqual([2, 3]);
  });

  it('intersects bigger set with lower set', () => {
    const setA = new Set();
    setA.add(1);
    setA.add(2);
    setA.add(3);
    setA.add(4);
    const setB = new Set();
    setB.add(2);
    setB.add(3);
    setB.add(4);

    const intersectionAB = setA.intersection(setB);
    expect(intersectionAB.values()).toStrictEqual([2, 3, 4]);
  })

  it('difference between two sets', () => {
    const setA = new Set<number>();
    setA.add(1);
    setA.add(2);
    setA.add(3);
    const setB = new Set<number>();
    setB.add(2);
    setB.add(3);
    setB.add(4);

    const differenceAB = setA.difference(setB);
    expect(differenceAB.values()).toStrictEqual([1]);
  });

  it('tests if a set is subset of another set', () => {
    const setA = new Set<number>();
    setA.add(1);
    setA.add(2);
    const setB = new Set<number>();
    setB.add(1);
    setB.add(2);
    setB.add(3);
    const setC = new Set<number>();
    setC.add(2);
    setC.add(3);
    setC.add(4);

    expect(setA.isSubsetOf(setB)).toBeTruthy();
    expect(setA.isSubsetOf(setC)).toBeFalsy();
    expect(setC.isSubsetOf(setA)).toBeFalsy();
  });
});
