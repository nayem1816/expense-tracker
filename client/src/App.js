import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddExpense from "./pages/AddExpense/AddExpense";
import AddUpdateBudget from "./pages/AddUpdateBudget/AddUpdateBudget";
import ViewCategories from "./pages/ViewCategories/ViewCategories";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/budgets" element={<AddUpdateBudget />} />
          <Route path="/categories" element={<ViewCategories />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
