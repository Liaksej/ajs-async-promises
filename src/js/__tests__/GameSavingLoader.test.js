import { GameSavingLoader } from "../GameSavingLoader.js";

test("testing working status of GameSavingLoader class", () => {
  return GameSavingLoader.load().then((result) => {
    expect(JSON.parse(result)).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: { id: 1, name: "Hitman", level: 10, points: 2000 },
    });
  });
});
