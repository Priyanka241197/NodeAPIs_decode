const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    event_name: String,
    event_title: String,
    event_description: String,
    event_location: String,
    event_date: String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('event', eventSchema);
