"use strict";
let Models = require("../models"); //matches index.js

const getMovementRecord = (res) => {
    Models.Movement.find({})
        .then(users => res.send(users))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createMovementRecord = (userPayload, res) => {
    new Models.Movement(userPayload).save()
        .then(user => res.send(user))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getMovementRecord, createMovementRecord
}