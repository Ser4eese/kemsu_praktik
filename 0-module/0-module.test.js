import { sum } from './1-task/index'

describe('1 task', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
})