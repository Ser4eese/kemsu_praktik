import { sumSalary } from './1-task';
import { isEmpty } from './2-task'
import './3-task';
describe('1-task', () => {
    it('должна складывать все зарплаты', () => {
        let salaries = {
            John: 1000,
            Ann: 1600,
            Pete: 1300
        };

        expect(sumSalary(salaries)).toEqual(3900);
    });

    it('должна игнорировать свойства других типов', () => {
        let salaries = {
            John: 1000,
            Ann: 1600,
            Pete: 1300,
            month: 'December',
            currency: 'USD',
            isPayed: false
        };

        expect(sumSalary(salaries)).toEqual(3900);
    });

    it('должна игнорировать специальные числовые значения', () => {
        let salaries = {
            John: 1000,
            Ann: 1600,
            Pete: 1300,
            Bob: NaN,
            Peter: Infinity,
            Ivan: -Infinity,
            month: 'December',
            currency: 'USD',
            isPayed: false
        };

        expect(sumSalary(salaries)).toEqual(3900);
    });

    it('должна возвращать 0 если нет свойств с зарплатами', () => {
        let salaries = {
            month: 'December',
            currency: 'USD',
            isPayed: false
        };

        expect(sumSalary(salaries)).toEqual(0);
    });
});


describe('2-task', () => {
    it('{} должен вернуть true', () => {
        const obj = {};
        expect(isEmpty(obj)).toEqual(true);
    });

    it('объект со свойством undefined должен считаться не пустым', () => {
        const obj = {
            test: true,
        };

        obj.test = undefined;

        expect(isEmpty(obj)).toEqual(false);
    });

    it('объект с удалённым свойством - пустой', () => {
        const obj = {
            test: true,
        };

        delete obj.test;

        expect(isEmpty(obj)).toEqual(true);
    });

    it('если у объекта есть хоть одно свойство, то он не пустой', () => {
        const obj = {
            test: true,
        };

        expect(isEmpty(obj)).toEqual(false);
    });
});

describe('3-task', () => {
    it('должно складывать числа', () => {
        calculator.read(3, 5);
        expect(calculator.sum()).toBe(8);
    });

    it('должно умножать числа', () => {
        calculator.read(3, 5);
        expect(calculator.mul()).toBe(15);
    });

    it('должно корректно складывать числа с 0 первым аргументом', () => {
        calculator.read(0, 1);
        expect(calculator.sum()).toBe(1);
    });

    it('должно корректно складывать числа с 0 вторым аргументом', () => {
        calculator.read(1, 0);
        expect(calculator.sum()).toBe(1);
    });
});
