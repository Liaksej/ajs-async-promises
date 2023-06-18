import json from "./parser.js";
import read from "./reader.js";

export class GameSavingLoader {
  static load() {
    return read().then((result) => json(result));
  }
}
