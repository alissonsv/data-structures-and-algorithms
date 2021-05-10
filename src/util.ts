export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
};

export function defaultEquals<T>(a:T, b:T): boolean {
  return a === b;
}

export function defaultCompare(a: any, b: any): number {
  if (a === b) {
    return 0;
  }

  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}