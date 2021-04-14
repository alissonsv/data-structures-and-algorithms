import { hotPotato } from '../../../data-structures/others/hot-potato';

describe('Hot Potato', () => {
  test('should return the winner', () => {
    const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
    expect(hotPotato(names, 6).winner).toBe('Ingrid');
    expect(hotPotato(names, 7).winner).toBe('John');
    expect(hotPotato(names, 8).winner).toBe('Jack');
    expect(hotPotato(names, 9).winner).toBe('Ingrid');
    expect(hotPotato(names, 10).winner).toBe('Carl');
  })
})