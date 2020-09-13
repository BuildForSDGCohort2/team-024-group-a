var express = require("express");
var  router = express.Router();

const guestController = require("../controllers/guest.controller");


router
  .route("/")
  .get((req, res) => {
    res.status(200).json({ message: "GET unAuthorization routes" });
  })
  .post((req, res) => {
    res.status(200).json({ message: " take to login" });
  });


module.exports = router;

