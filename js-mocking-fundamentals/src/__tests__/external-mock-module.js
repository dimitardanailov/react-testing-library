const thumbWar = require("../thumb-war");
const utilsMock = require("../utils");

jest.mock("../utils");

test("returns winner", () => {
  const winner = thumbWar("Adam", "John");
  expect(winner).toBe("Adam");
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ["Adam", "John"],
    ["Adam", "John"]
  ]);

  // cleanup
  utilsMock.getWinner.mockReset();
});
