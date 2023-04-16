const express = require("express");
const BalanceController = require("../controller/Balance.controller");

const router = express.Router();

router
  .route("/")
  .post(BalanceController.addBalance)
  .get(BalanceController.getBalance);

module.exports = router;
