const express = require("express");

const { getsignupform, usersignup }= require("../controllers/signupcontroller")

const router = express.Router();


router.get("/", getsignupform);
router.post("/", usersignup)

module.exports = router;    