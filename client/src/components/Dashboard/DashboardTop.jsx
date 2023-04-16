import React, { useEffect, useState } from "react";

const DashboardTop = () => {
  const [currentBalance, setCurrentBalance] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/balance")
      .then((res) => res.json())
      .then((data) => {
        setCurrentBalance(data.currentBalance);
      });
  }, []);

  return (
    <div>
      <div className="card-part grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="budget border px-5 py-10 text-center rounded">
          <h2 className="text-3xl font-semibold mb-3">Current Balance</h2>
          <h3 className="text-xl font-semibold">${currentBalance}</h3>
        </div>
        <div className="expense border p-5 text-center rounded">
          <h2 className="text-3xl font-semibold mb-3">Weakly Expense</h2>
          <h3 className="text-xl font-semibold">$0.00</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
