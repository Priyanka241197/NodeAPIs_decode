const express = require("express");
const router = express.Router();
const eventController = require("./controllers/event.controller");
const multer = require('multer');
const { uploadFile } = require("../../middlewares/upload-middleware")
let upload = multer({ storage: uploadFile.storage})

router.post("/",upload.any('file'), eventController.addEvent)
module.exports = router;