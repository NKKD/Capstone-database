"use strict";
let Models = require("../models"); //matches index.js

const getVoltageRecord = (res) => {
    Models.Voltage.find({})
        .then(users => res.send(users))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createVoltageRecord = (userPayload, res) => {
    new Models.Voltage(userPayload).save()
        .then(user => res.send(user))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const deleteAllVoltageRecords = (res) => {
    Models.Voltage.deleteMany({})
        .then(() => {
            res.send({ result: 200, message: "All voltage records deleted successfully!" });
        })
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
}



module.exports = {
    getVoltageRecord, createVoltageRecord, deleteAllVoltageRecords
}