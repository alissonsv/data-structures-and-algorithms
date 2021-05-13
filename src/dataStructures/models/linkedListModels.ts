/* eslint max-classes-per-file: 0 */

export class Node<T> {
  public element: T;

  public next?: Node<T>;

  constructor(element: T, next?: Node<T>) {
    this.element = element;
    this.next = next;
  }
}

export class DoublyNode<T> extends Node<T> {
  public prev?: DoublyNode<T>;

  public next?: DoublyNode<T>;

  constructor(element: T, next?: DoublyNode<T>, prev?: DoublyNode<T>) {
    super(element, next);
    this.prev = prev;
  }
}
