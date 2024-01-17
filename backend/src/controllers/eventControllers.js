const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const events = await tables.Event.readAll();
    res.json(events);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const idea = await tables.Event.read(req.params.id);
    if (idea == null) {
      res.sendStatus(404);
    } else {
      res.json(idea);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
