
const eventService =require("../services/event.service")

module.exports.addEvent = async (req, res) => {
    let response = {}
    try {
        const responseFromSevice = await eventService.createEvent(req.body);
        console.log("responseFromSevice---->",responseFromSevice);
        let event_id = responseFromSevice._id;

        if (event_id) {
            
            try {
                if(req.files.length > 0){
                    req.files.forEach(async (element) => {  
                     await eventService.uploadEventFiles(element, event_id);
                    });
                }
               
                response['status'] = 200,
                response['message'] = "You have created event successfull"
                // response.data = responseFromSevice;
            }
            catch (error) {
                console.log("controller : upload event file error ", error);
                response['status'] = 500,
                response['message'] = "Errro while uploading files"
            }
        }
    }
    catch (error) {
        console.log("controller : addEventController error ", error);
        response['status'] = 500,
        response['message'] = "Errro while creating events"
    }
    return res.send(response);
}