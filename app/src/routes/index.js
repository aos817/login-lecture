"use strict";

const express = require("express");
var router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/rental", ctrl.output.rental);


router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);




module.exports = router;//내보내기 역할