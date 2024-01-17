const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const salons = await tables.Salon.readAll();
    res.json(salons);
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    console.info(req.body);
    const existingSalon = await tables.Salon.readOneUser(name, email);
    if (existingSalon) {
      return res.status((400).json({ error: "Cet utilsateur existe déjà." }));
    }
    const insertId = await tables.Salon.create(req.body);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
  return null;
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const oneUser = await tables.user.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (oneUser == null) {
      res.sendStatus(404);
    } else {
      res.json(oneUser);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};


module.exports = {
  browse,
  read,
  add,
};
