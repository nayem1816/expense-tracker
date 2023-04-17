import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ExpenseList = () => {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/expense")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setExpense(data.data.reverse());
        }
      });
  }, []);

  return (
    <div className="my-5">
      <h2 className="text-2xl font-semibold">Expense List</h2>

      <div className="expense-table my-3">
        <div
          style={{ height: "400px" }}
          className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* <th scope="col" className="pl-6 py-3">
                  ID
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {expense.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  {/* <td className="pl-6 py-4">{item.id}</td> */}
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                  </th>
                  <td className="px-6 py-4">${item.amount}</td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">
                    <Link
                      to=""
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
