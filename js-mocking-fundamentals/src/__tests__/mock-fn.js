const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("returns winner", () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar("Adam", "Johh");
  expect(winner).toBe("Adam");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Adam", "Johh"],
    ["Adam", "Johh"]
  ]);

  // could also do these assertions:
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, "Adam", "Johh");
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, "Adam", "Johh");

  // cleanup
  utils.getWinner = originalGetWinner;
});
