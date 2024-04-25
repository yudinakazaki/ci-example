const sub = require('./sub')

test('return the subtraction of two numbers', () => {
  expect(sub(10, 5)).toBe(5)
})