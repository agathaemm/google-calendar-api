const { createEvent, listEvents } = require("../services/googleCalendarService");

const create = async (req, res) => {
  const event = req.body;
  await createEvent(event)
  res.status(201);
};

const list = async(req, res) => {
  const events = await listEvents()
  return res.json(events); 
}

module.exports = { create, list };