require("../__no-framework-mocks__/utils"); // prime the cache
const utilsPath = require.resolve("../utils");
const mockUtilsPath = require.resolve("../__no-framework-mocks__/utils");
require.cache[utilsPath] = require.cache[mockUtilsPath];

const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const winner = thumbWar("Adam", "John");
assert.strictEqual(winner, "Adam");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Adam", "John"],
  ["Adam", "John"]
]);

// cleanup
delete require.cache[utilsPath];
