var express = require("express");
var router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.status(200).json({ message: "GET from doctors" });
  })
  .post((req, res) => {
    res.status(200).json({ message: "POST to doctors" });
  });

router
  .route("/doctor")
  .get((req, res) => {
    res.status(200).json({ message: "GET from a doctor" });
  })
  .post((req, res) => {
    res.status(200).json({ message: "POST to a doctor" });
  });

router
  .route("hospitals")
  .get((req, res) => {
    res.status(200).json({ message: "GET from hospital" });
  })
  .post((req, res) => {
    res.status(200).json({ message: "POST to a doctor" });
  });

router
  .route("dcenter")
  .get((req, res) => {
    res.status(200).json({ message: "GET from diagnostic center" });
  })
  .post((req, res) => {
    res.status(200).json({ message: "POST to diagnostic center" });
  });

module.exports = router;
