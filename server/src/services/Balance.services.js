const myExpense = require("../data/data.js");

exports.getBalanceService = async () => {
  let totalExpense = 0;

  myExpense.expense.forEach((item) => {
    totalExpense = totalExpense + item.amount;
  });

  let currentBalance = myExpense.currentBalance - totalExpense;

  return currentBalance;
};

exports.addBalanceService = async (data) => {
  const newBalance = myExpense.currentBalance + parseInt(data.balance);

  myExpense.currentBalance = newBalance;

  return myExpense.currentBalance;
};
