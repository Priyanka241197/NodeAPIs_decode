const multer = require('multer');

module.exports.uploadFile = {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            let fileType = file.originalname.split('.')[1];
            if (fileType === "jpg" || fileType === 'webp' || fileType == "PNG" || fileType === "jpeg" || fileType === "pdf" || fileType === "PDF" || fileType === "mkv") {
                cb(null, (__dirname, './uploads'));
            }
            else {
                cb(null, new Error(constants.fileMessage.INVALID_FILE));
            }
        },
        filename: (req, file, cb) => {
            cb(null,  Date.now() + '_' + file.originalname.split('.')[0]+ '.' + file.originalname.split('.')[1]);
        },
    }),

}