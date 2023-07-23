const express = require("express");
const { getLaunches } = require("./launches.controller");

const router = express.Router();

router.get('/launches', getLaunches)

module.exports = router;