const thumbWar = require("../thumb-war");
const utils = require("../utils");

jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p1)
  };
});

test("returns winner", () => {
  const winner = thumbWar("Adam", "John");
  expect(winner).toBe("Adam");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Adam", "John"],
    ["Adam", "John"]
  ]);

  utils.getWinner.mockReset();
});
