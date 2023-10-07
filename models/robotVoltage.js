const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    voltage: {type: String, trim: true,  require: true},
    voltagePostDate: { type: Date, default: Date.now, require: true}
});
const RobotBatteryStatus = mongoose.model("Voltage", userModel);

module.exports = RobotBatteryStatus;