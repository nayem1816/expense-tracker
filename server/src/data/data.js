const myExpense = {
  currentBalance: 10000,
  category: [
    { id: 1, name: "Food" },
    { id: 2, name: "Transportation" },
    { id: 3, name: "Entertainment" },
  ],
  expense: [
    {
      id: 1,
      name: "Food",
      amount: 100,
      date: "2023-04-10",
      category: 1,
    },
    {
      id: 2,
      name: "Transportation",
      amount: 200,
      date: "2023-04-09",
      category: 2,
    },
    {
      id: 3,
      name: "Entertainment",
      amount: 300,
      date: "2023-04-08",
      category: 3,
    },
    {
      id: 4,
      name: "Food",
      amount: 400,
      date: "2023-04-05",
      category: 1,
    },
    {
      id: 5,
      name: "Transportation",
      amount: 500,
      date: "2023-04-11",
      category: 2,
    },
    {
      id: 6,
      name: "Entertainment",
      amount: 600,
      date: "2023-04-09",
      category: 3,
    },
    {
      id: 7,
      name: "Food",
      amount: 700,
      date: "2023-04-10",
      category: 1,
    },
    {
      id: 8,
      name: "Transportation",
      amount: 800,
      date: "2023-04-11",
      category: 2,
    },
    {
      id: 9,
      name: "Entertainment",
      amount: 900,
      date: "2023-04-12",
      category: 3,
    },
    {
      id: 10,
      name: "Food",
      amount: 1000,
      date: "2023-04-13",
      category: 1,
    },
  ],
};

module.exports = myExpense;
