var express = require("express");
var  router = express.Router();
const auth  = require('../../config/Auth.js');


const guestController = require("../controllers/guest.controller");


router
  .route("/")
  .get((req, res) => {
    res.status(200).json({ message: "GET unAuthorization routes" });
  })
  .post(auth.login, (req, res) => {
    res.status(200).json({ message: " take to login" });
  });


router
  .route("/register")
  .post(auth.register, (req,res) => {

  })

module.exports = router;

