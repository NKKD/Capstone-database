let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.voltageController.getVoltageRecord(res);
})

router.post('/', (req, res) => {
    Controllers.voltageController.createVoltageRecord(req.body, res)
})

router.delete('/', (req, res) => {
    Controllers.voltageController.deleteAllVoltageRecords(res);
})


module.exports = router;