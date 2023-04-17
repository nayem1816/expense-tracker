const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const BalanceRoute = require("./src/routes/Balance.route");
const CategoryRoute = require("./src/routes/Category.route");
const ExpenseRoute = require("./src/routes/Expense.route");

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Route is working");
});

app.use("/api/v1/balance", BalanceRoute);
app.use("/api/v1/category", CategoryRoute);
app.use("/api/v1/expense", ExpenseRoute);

module.exports = app;
