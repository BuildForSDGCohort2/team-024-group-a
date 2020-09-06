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
  .route("/dcenter")
  .get((req, res) => {
    res.status(200).json({ message: "GET from diagnostic centers" });
  })
  .post((req, res) => {
    res.status(200).json({ message: "POST to diagnostic centers" });
  });

router
  .route("/clients")
  .get((req, res) => {
    res.status(200).json({ message: "GET from clients" });
  })
  .post((req, res) => {
    res.status(200).json({ message: "POST to clients" });
  });

router
  .route("/hospitals")
  .get((req, res) => {
    res.status(200).json({ message: "GET from hospitals" });
  })
  .post((req, res) => {
    res.status(200).json({ message: "POST to hospitals" });
  });

router
  .route("/admin")
  .get((req, res) => {
    res.status(200).json({ message: "GET from admin" });
  })
  .post((req, res) => {
    res.status(200).json({ message: "POST to admin" });
  });

module.exports = router;
