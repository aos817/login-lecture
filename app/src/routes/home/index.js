"use strict";

const express=require("express");
const router=express.Router();

const ctrl=require("./home.ctrl");

router.get("/",ctrl.ouput.home);

router.get("/login",ctrl.ouput.login);

router.post("/login",ctrl.process.login);


module.exports=router;//내보내기 역할