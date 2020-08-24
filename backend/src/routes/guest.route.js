var express = require("express");
var  router = express.Router();

const guestController = require("../controllers/guest.controller");


router.get("/",  [], guestController.welcome);


module.exports = router;

