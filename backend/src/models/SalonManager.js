const AbstractManager = require("./AbstractManager");

class SalonManager extends AbstractManager {
  constructor() {
    super({ table: "Salon" });
  }

  async read(id) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id=?`,
      [id]
    );
    return result;
  }

  async updatePointById({ id, point }) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET point = ? WHERE id=?`,
      [point, id]
    );
    return result;
  }

  async updateSubscriptionById({ id, is_subscription: isSubscription }) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET is_subscription = ? WHERE id=?`,
      [isSubscription, id]
    );
    return result;
  }

  async create({
    name,
    email,
    address,
    phone_number: phoneNumber,
    hashed_password: hashedPassword,
  }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table}(
        name,
        email,
        address,
        phone_number,
        hashed_password) VALUES (?, ?, ?, ?, ?)`,
      [name, email, address, phoneNumber, hashedPassword]
    );
    return result;
  }
  /*
  async create(user) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, email, hashed_password) values (?, ?, ?)`,
      [
        user.name,
        user.email,
        user.hashedPassword,
      ]
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

  async readOneUser(newUser) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE name = ? OR email = ? OR id=?`,
      [newUser.name, newUser.email, newUser.id]
    );
    return result[0];
  }
*/
}

module.exports = SalonManager;
