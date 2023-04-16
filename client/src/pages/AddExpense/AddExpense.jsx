import React from "react";
import ExpenseForm from "../../components/AddExpense/ExpenseForm";

const AddExpense = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Add Expense</h2>
      <ExpenseForm />
    </div>
  );
};

export default AddExpense;
