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

async function test(title, callback) {
	try {
		await callback()
		console.log(`✔ ${title}`)
	} catch (e) {
		console.error(`✕ ${title}`)
    console.error(e)
	}
}

function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`${actual} is not equal to ${expected}`)
			}
		} 
	}
}