const {makeComponent, makeView, migrate} = require("../");

class Parser {
  constructor(argv) {
    this._parse(argv);
  }
  _parse(argv) {
    const command = argv[2];
    const args = argv[3];
    if (command === undefined) {
      console.log(this._defautMsg);
      return;
    }

    switch (command) {
      case "make-component":
        makeComponent(args);
        break;
      case "make-view":
        makeView(args);
        break;
      case "migrate":
        migrate();
        break;

      default:
        console.log("Unknown Command: " + command);
        console.log(this._defautMsg);
        break;
    }
  }
  get _defautMsg() {
    return "Available commands: make-component, make-view, migrate";
  }
}

module.exports = {Parser};
