const {
  getBalanceService,
  addBalanceService,
} = require("../services/Balance.services");

exports.getBalance = async (req, res, next) => {
  try {
    const result = await getBalanceService();

    res.status(200).json({
      status: "success",
      message: "Balance get successfully",
      currentBalance: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Balance can't get successfully",
      error: error,
    });
  }
};

exports.addBalance = async (req, res, next) => {
  try {
    const result = await addBalanceService(req.body);
    res.status(200).json({
      status: "success",
      message: "Balance add successfully",
      currentBalance: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Balance can't add successfully",
      error: error,
    });
  }
};
