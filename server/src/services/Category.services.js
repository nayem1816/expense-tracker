const myExpense = require("../data/data.js");

exports.getCategoryService = async () => {
  return myExpense.category;
};
