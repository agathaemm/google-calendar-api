const express = require('express');
const router = express.Router();
const googleCalendarController = require('../controllers/googleCalendarController');

router.post('/google-calendar/events/create', googleCalendarController.create);
router.get('/google-calendar/events/list', googleCalendarController.list);
router.delete('/google-calendar/events/delete/:eventId', googleCalendarController.remove);
module.exports = router;