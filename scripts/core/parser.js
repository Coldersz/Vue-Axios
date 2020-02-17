const {makeComponent, makeView, migrate} = require("../");

class Parser {
  constructor(argv) {
    this._parse(argv);
  }
  _parse(argv) {
    const command = argv[2];
    const args = argv[3];
    if (command === undefined) {
      console.log("Available commands: make-component, make-view, migrate");
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
        break;
    }
  }
}

module.exports = {Parser};
