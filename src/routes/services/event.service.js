
const eventModel = require("../../../dbconnection/models/event.model") 
const  eventAttachment = require("../../../dbconnection/models/event-attachment.model")

module.exports.createEvent = async (serviceData) => {
    try {
        let event = new eventModel({ ...serviceData });
        result = await event.save();
        return result
    }
    catch (error) {
        console.log("service : createEvent error", error);
        throw new Error(error.message);
    }
}

module.exports.uploadEventFiles = async (file, eventId) => {
    try {
        if (file) {
            let eventFile = new eventAttachment({ filename: file.filename, filepath: file.path, event_id: eventId });
            let result = await eventFile.save();
            return result
        }
        if (!file) {
            throw new Error("File field is required");
        }
    }
    catch (error) {
        console.log("service : uploadEventFile error", error);
        throw new Error(error.message);
    }
}
