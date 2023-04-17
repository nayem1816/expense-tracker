const myExpense = require("../data/data.js");

exports.addExpenseService = async (data) => {
  const { expense, category } = data;

  const findCategory = myExpense.category.find(
    (item) => item.value === category.value
  );

  if (!findCategory) {
    const newCategory = {
      id: myExpense.category.length + 1,
      value: category.value,
      label: category.label,
      isused: "false",
    };
    myExpense.category.push(newCategory);
  }

  let index = 0;

  myExpense.category.forEach((item) => {
    if (item.value === category.value) {
      index = item.id;
    }
  });

  const newExpense = {
    id: myExpense.expense.length + 1,
    name: expense.name,
    amount: parseInt(expense.amount),
    date: expense.date,
    category: index,
  };

  myExpense.expense.push(newExpense);

  return myExpense.expense;
};

exports.getExpenseService = async () => {
  const expenseData = myExpense.expense.map((item) => {
    const category = myExpense.category.find(
      (category) => category.id === item.category
    );
    return {
      ...item,
      category: category.value,
    };
  });

  return expenseData;
};
