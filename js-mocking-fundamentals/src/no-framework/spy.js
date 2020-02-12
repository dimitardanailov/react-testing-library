const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  mockFn.mockImplementation = newImpl => (impl = newImpl);
  return mockFn;
}

function spyOn(obj, prop) {
  const originalValue = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
}

spyOn(utils, "getWinner");

const originalGetWinner = utils.getWinner;
utils.getWinner.mockImplementation((p1, p2) => p1);

const winner = thumbWar("Adam", "John");
assert.strictEqual(winner, "Adam");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Adam", "John"],
  ["Adam", "John"]
]);

// cleanup
utils.getWinner.mockRestore();
