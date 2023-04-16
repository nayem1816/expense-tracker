import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import Layout from "./Layout/Layout";
import Loading from "./components/Loading/Loading";

const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const AddExpense = React.lazy(() => import("./pages/AddExpense/AddExpense"));
const AddBalance = React.lazy(() => import("./pages/AddBalance/AddBalance"));
const ViewCategories = React.lazy(() =>
  import("./pages/ViewCategories/ViewCategories")
);

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/add-balance" element={<AddBalance />} />
            <Route path="/categories" element={<ViewCategories />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </>
  );
}

export default App;
