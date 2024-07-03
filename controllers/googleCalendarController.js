const { createEvent, listEvents, deleteEvent } = require("../services/googleCalendarService");

const create = async (req, res) => {
  const event = req.body;
  await createEvent(event)
  res.status(201);
};

const list = async(req, res) => {
  const events = await listEvents()
  return res.json(events); 
}

const remove = async(req, res) => {
  const { eventId } = req.params; 
  await deleteEvent(eventId);
  res.status(201);
}

module.exports = { create, list, remove };