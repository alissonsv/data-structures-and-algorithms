export class Node<T> {
  public element: T;
  public next: Node<T>;

  constructor(element: T, next: Node<T>) {
    this.element = element;
    this.next = next;
  }
}