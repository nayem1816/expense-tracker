const express = require("express");
const ExpenseController = require("../controller/Expense.controller");

const router = express.Router();

router
  .route("/")
  .post(ExpenseController.addExpense)
  .get(ExpenseController.getExpense);

module.exports = router;
