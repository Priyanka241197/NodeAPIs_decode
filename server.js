const express = require("express");
const dotEnv = require("dotenv");
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConnection = require("./dbconnection/connection");

dotEnv.config();
const app = express();
dbConnection();

app.get('/', (req, res) => {
    res.send("node demo api running...");
});


app.use("/api/events",require("./src/routes/event.route"))

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})