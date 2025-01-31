const express = require('express');
const Event = require('../models/Event');

const router = express.Router();

// Get All Events
router.get('/', async (req, res) => {
    const events = await Event.find();
    res.json(events);
});

// Create Event
router.post('/', async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.json({ message: 'Event created' });
});

// Get Event by ID
router.get('/:id', async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.json(event);
});

module.exports = router;
