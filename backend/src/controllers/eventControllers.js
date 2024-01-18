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

const readEventBySalonId = async (req, res, next) => {
  try {
    const event = await tables.comment.readEventBySalonId(req.params.id);
    if (event == null) {
      res.sendStatus(404);
    } else {
      res.json(event);
    }
  } catch (err) {
    next(err);
  }
};


module.exports = {
  browse,
  read,
  readEventBySalonId,
};
