const {
  addExpenseService,
  getExpenseService,
  getWeaklyExpenseService,
} = require("../services/Expense.services");

exports.addExpense = async (req, res, next) => {
  try {
    const result = await addExpenseService(req.body);
    res.status(200).json({
      status: "success",
      message: "Expense add successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Expense can't add successfully",
      error: error,
    });
  }
};

exports.getExpense = async (req, res, next) => {
  try {
    const result = await getExpenseService();
    res.status(200).json({
      status: "success",
      message: "Expense get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Expense can't get successfully",
      error: error,
    });
  }
};

exports.getWeaklyExpense = async (req, res, next) => {
  try {
    const result = await getWeaklyExpenseService();
    res.status(200).json({
      status: "success",
      message: "Expense get successfully",
      weaklyCost: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Expense can't get successfully",
      error: error,
    });
  }
};
