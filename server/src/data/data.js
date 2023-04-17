const myExpense = {
  currentBalance: 10000,
  category: [
    { id: 1, value: "Food", label: "Food", isused: "false" },
    { id: 2, value: "Transport", label: "Transport", isused: "false" },
    { id: 3, value: "Shopping", label: "Shopping", isused: "false" },
    { id: 4, value: "Entertainment", label: "Entertainment", isused: "false" },
  ],
  expense: [
    {
      id: 1,
      name: "Kacci Biriyani and Borhani",
      amount: 100,
      date: "2023-04-10",
      category: 1,
    },
    {
      id: 2,
      name: "Go to office",
      amount: 200,
      date: "2023-04-09",
      category: 2,
    },
    {
      id: 3,
      name: "Movie watching with friends",
      amount: 300,
      date: "2023-04-08",
      category: 3,
    },
    {
      id: 4,
      name: "Chicken Fry and Salad",
      amount: 400,
      date: "2023-04-05",
      category: 1,
    },
    {
      id: 5,
      name: "Go to Cox's Bazar",
      amount: 500,
      date: "2023-04-11",
      category: 2,
    },
    {
      id: 6,
      name: "Playing Cricket with friends",
      amount: 600,
      date: "2023-04-09",
      category: 3,
    },
    {
      id: 7,
      name: "Bangladeshi traditional food",
      amount: 700,
      date: "2023-04-10",
      category: 1,
    },
    {
      id: 8,
      name: "Go to Chittagong",
      amount: 800,
      date: "2023-04-11",
      category: 2,
    },
    {
      id: 9,
      name: "Playing Football with friends",
      amount: 900,
      date: "2023-04-12",
      category: 3,
    },
    {
      id: 10,
      name: "Eat Mejbaan and Salad with friends",
      amount: 1000,
      date: "2023-04-13",
      category: 1,
    },
  ],
};

module.exports = myExpense;
