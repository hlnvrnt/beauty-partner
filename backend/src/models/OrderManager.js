const AbstractManager = require("./AbstractManager");

class OrderManager extends AbstractManager {
  constructor() {
    super({ table: "Order" });
  }

  async create(salonId, eventId) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (salon_id, event_id) values (?, ?)`,
      [salonId, eventId]
    );
    return result;
  }

  
}

module.exports = OrderManager;
