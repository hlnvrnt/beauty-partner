const tables = require("../tables");

const read = async (req, res, next) => {
  try {
    const order = await tables.Order.read(req.params.id);
    if (order == null) {
      res.sendStatus(404);
    } else {
      res.json(order);
    }
  } catch (err) {
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    const result = await tables.Order.browse(req.params.id);
    res.status(201).json({ result });
  } catch (err) {
    next(err);
  }
  return null;
};

module.exports = {
  read,
  browse,
};
