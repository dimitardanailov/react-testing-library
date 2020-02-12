const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("returns winner", () => {
  jest.spyOn(utils, "getWinner");
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar("Adam", "John");

  expect(winner).toBe("Adam");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Adam", "John"],
    ["Adam", "John"]
  ]);

  // cleanup
  utils.getWinner.mockRestore();
});
