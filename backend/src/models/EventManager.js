const AbstractManager = require("./AbstractManager");

class EventManager extends AbstractManager {
  constructor() {
    super({ table: "Event" });
  }
}

module.exports = EventManager;
