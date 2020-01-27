const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const originalGetWinner = utils.getWinner
utils.getWinner = (p1, _) => p1

const winner = thumbWar('Adam', 'John')
assert.strictEqual(winner, 'Adam')

utils.getWinner = originalGetWinner
