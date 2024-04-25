const sum = require('./sum')

test('return the sum of two number', () => {
  expect(sum(10, 15)).toBe(25)
})