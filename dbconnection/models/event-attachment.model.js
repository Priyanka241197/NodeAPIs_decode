const mongoose = require('mongoose');

const eventFileSchema = new mongoose.Schema({
    filename: String,
    filepath: String,
    event_id: Object
}, {
    timestamps: true,
})

module.exports = mongoose.model('eventAttachment', eventFileSchema);

