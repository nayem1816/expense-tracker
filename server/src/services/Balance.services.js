const myExpense = require("../data/data.js");

exports.getBalanceService = async () => {
  return myExpense.currentBalance;
};

exports.addBalanceService = async (data) => {
  const newBalance = myExpense.currentBalance + parseInt(data.balance);

  myExpense.currentBalance = newBalance;

  return myExpense.currentBalance;
};
