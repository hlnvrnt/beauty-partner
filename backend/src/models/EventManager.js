const AbstractManager = require("./AbstractManager");

class EventManager extends AbstractManager {
  constructor() {
    super({ table: "Event" });
  }

  async read(id) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id=?`,
      [id]
    );
    return result;
  }

  async readEventBySalonId(id) {
    const [result] = await this.database.query(
      `select salon.id, event_id, salon.name, salon.point, event.name, event.surname, event.value from ${this.table} JOIN salon ON salon_id=salon.id where event_id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = EventManager;
