const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    linearX: { type: String, trim: true},
    linearY: { type: String, trim: true},
    angularZ: { type: String, trim: true},
    movementID: { type: String, trim: true, required: true },
});
const RobotMovement = mongoose.model("Movement", userModel);

module.exports = RobotMovement;