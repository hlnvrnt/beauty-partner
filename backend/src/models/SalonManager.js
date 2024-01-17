const AbstractManager = require("./AbstractManager");

class SalonManager extends AbstractManager {
  constructor() {
    super({ table: "Salon" });
  }

  async create(salon) {
    console.info("Creating", salon);
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, email, password) values (?, ?, ?)`,
      [salon.name, salon.email, salon.password]
    );
    return result;
  }

  // on cherche le user par son adresse e-mail pour renvoyer toutes ses infos (pour ensuite vérifier le mdp et si ok renvoyer les infos users vers le front)
  async getByMail(email) {
    const [result] = await this.database.query(
      `SELECT * from ${this.table} WHERE email = ?`,
      [email]
    );
    return result[0];
  }

  async readOneUser(newSalon) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE name = ? OR email = ? OR id=?`,
      [newSalon.name, newSalon.email, newSalon.id]
    );
    return result[0];
  }
}

module.exports = SalonManager;
