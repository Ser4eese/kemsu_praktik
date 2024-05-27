import { factorial } from './1-task';
import { isValid } from './2-task';

describe('1 task', () => {
    it('факториал 0 равен 1', () => {
      expect(factorial(0)).toEqual(1);
    });
  
    it('факториал 1 равен 1', () => {
      expect(factorial(1)).toEqual(1);
    });
  
    it('факториал 3 равен 6 ', () => {
      expect(factorial(3)).toEqual(6);
    });
  
    it('факториал 5 равен 120 ', () => {
      expect(factorial(5)).toEqual(120);
    });
});
  
describe('2-task', () => {
  it('если имя корректное, то true', () => {
    expect(isValid('Ilia')).toEqual(true);
  });

  it('если содержит пробелы, то false', () => {
    expect(isValid('Ilia Burlak')).toEqual(false);
  });

  it('если меньше 4 символов то false', () => {
    expect(isValid('Ili')).toEqual(false);
  });

  it('если null то false', () => {
    expect(isValid(null)).toEqual(false);
  });
});