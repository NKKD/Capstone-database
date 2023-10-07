let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.movementController.getMovementRecord(res);
})

router.post('/', (req, res) => {
    Controllers.movementController.createMovementRecord(req.body, res)
})


module.exports = router;