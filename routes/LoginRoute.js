const express = require("express");

const {userLogin , getloginform} = require("../controllers/signupcontroller");

const router = express.Router();


router.get("/",getloginform )
router.post("/" , userLogin);

module.exports = router;