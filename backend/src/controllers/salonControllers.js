const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const readById = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const salon = await tables.Salon.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (salon == null) {
      res.sendStatus(404);
    } else {
      res.json(salon);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const editPoint = async (req, res, next) => {
  const { point } = req.body;
  const updatedSalon = {
    id: req.params.id,
    point,
  };

  try {
    // Fetch a specific item from the database based on the provided ID
    const salon = await tables.Salon.updatePointById(updatedSalon);
    res.json(salon);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add = async (req, res, next) => {
  const salon = req.body;
  try {
    const insertId = await tables.Salon.create(salon);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const editSubscription = async (req, res, next) => {
  const { is_subscription: isSubscription } = req.body;
  const updatedSalon = {
    id: req.params.id,
    is_subscription: isSubscription,
  };

  try {
    // Fetch a specific item from the database based on the provided ID
    const salon = await tables.Salon.updateSubscriptionById(updatedSalon);
    res.json(salon);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  readById,
  editPoint,
  editSubscription,
  add,
};
