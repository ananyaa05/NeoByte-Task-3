const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: String,
    time: String,
    location: String,
    category: String,
    organizer: String,
});
module.exports = mongoose.model('Event', EventSchema);
