// node --require ./global.js testin-framework.js

const sum = (a, b) => a + b
const subtract = (a, b) => a - b

test('sum adds numbers', async () => {
	const	result = await sum(3, 7)
	const expected = 5
	expect(result).toBe(expected)
})

test('subtract subtracts numbers', async () => {
	const result = await subtract(7, 3)
	const expected = 4
	expect(result).toBe(expected)
})