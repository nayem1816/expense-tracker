import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Divider, MultiSelect, Text, TextInput } from "@mantine/core";

const categories = [
  { value: "Food", label: "Food", isused: "false" },
  { value: "Transport", label: "Transport", isused: "false" },
  { value: "Shopping", label: "Shopping", isused: "false" },
  {
    value: "Entertainment",
    label: "Entertainment",
    isused: "false",
  },
];

const ExpenseForm = () => {
  const [category, setCategory] = React.useState([]);
  const [allCategory, setAllCategory] = React.useState(categories);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(category);
    console.log(allCategory);
  }, [allCategory, category]);

  console.log(category);

  const onSubmit = (data) => {
    console.log(data);

    // fetch("http://localhost:8080/api/v1/expense", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.status === "success") {
    //       toast.success(data.message, {
    //         position: "top-right",
    //         autoClose: 1000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //       });
    //       navigate("/");
    //     }
    //   });
  };
  return (
    <div>
      <div className="form my-5 mx-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 w-100 lg:w-1/2">
            <label
              htmlFor="balance"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Label
            </label>
            <input
              type="balance"
              placeholder="Enter your expense label"
              id="balance"
              {...register("name", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.name && (
              <span className="text-red-500">
                Please enter expanse label this field.
              </span>
            )}
          </div>
          <div className="mb-6 w-100 lg:w-1/2">
            <label
              htmlFor="amount"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Amount
            </label>
            <input
              type="number"
              placeholder="Enter your expense amount"
              id="amount"
              {...register("amount", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.amount && (
              <span className="text-red-500">
                Please enter expanse amount this field.
              </span>
            )}
          </div>
          <div className="mb-6 w-100 lg:w-1/2 select-input-style">
            <MultiSelect
              w="full"
              mt={10}
              data={categories}
              label="Select a Category"
              placeholder="Select a category or create a new one"
              searchable
              creatable
              value={category}
              onChange={setCategory}
              maxSelectedValues={1}
              getCreateLabel={(query) =>
                `+ Create ${query[0].toUpperCase() + query.substring(1)}`
              }
              onCreate={(query) => {
                const capQuery = query[0].toUpperCase() + query.substring(1);
                const item = {
                  value: capQuery,
                  label: capQuery,
                  isused: "false",
                };
                setAllCategory([...allCategory, item]);
                return item;
              }}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
