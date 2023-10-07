require("dotenv").config();
const express = require("express");
const cors = require('cors');
let dbConnect = require("./dbConnect");
let movementRoutes = require('./routes/movementRoutes')
let voltageRoutes = require('./routes/voltageRoutes')

const app = express();

// parse requests of content-type - application / json
app.use(express.json());
app.use(cors());

app.use('/api/robotMovement', movementRoutes);
app.use('/api/robotVoltage', voltageRoutes);


app.get("/", (req, res) => {
    res.json({ message: "Welcome to myMongoDB application." });
});



// set port, listen for requests
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});