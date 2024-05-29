import { factorial } from './1-task';
import { isValid } from './2-task';
import { ucFirst } from './3-task'
import { checkSpam } from './4-task'
import { truncate } from './5-task'

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

describe('3-task', () => {
  it('должна делать первый символ заглавным', () => {
    expect(ucFirst('вася')).toBe('Вася');
  });

  it('должна работать для строки из одной буквы', () => {
    expect(ucFirst('в')).toBe('В');
  });

  it('должна работать для пустой строки', () => {
    expect(ucFirst('')).toBe('');
  });
});

describe('4-task', () => {
  it('должна возвращать true для \'1XbeT now\'', () => {
    expect(checkSpam('1XbeT now')).toBe(true);
  });

  it('должна возвращать true для \'free xxxxx\'', () => {
    expect(checkSpam('free xxxxx')).toBe(true);
  });

  it('должна возвращать false для \'innocent rabbit\'', () => {
    expect(checkSpam('innocent rabbit')).toBe(false);
  });
});

describe('5-task', () => {
  it('должна усекать строку ', () => {
    let baseStr = 'Вот, что мне хотелось бы сказать на эту тему:';
    let resultStr = 'Вот, что мне хотело…';

    expect(truncate(baseStr, 20)).toBe(resultStr);
  });

  it('должна усекать строку для другого maxlength', () => {
    let baseStr = 'Вот, что мне хотелось бы сказать на эту тему:';
    let resultStr = 'Вот, что …';

    expect(truncate(baseStr, 10)).toBe(resultStr);
  });

  it('должна не трогать короткую строку ', () => {
    let baseStr = 'Всем привет!';

    expect(truncate(baseStr, 20)).toBe(baseStr);
  });
});