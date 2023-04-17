import React from "react";
import DashboardTop from "../../components/Dashboard/DashboardTop";
import ExpenseList from "../../components/Dashboard/ExpenseList";

const Dashboard = () => {
  return (
    <div>
      <DashboardTop />
      <ExpenseList />
    </div>
  );
};

export default Dashboard;
