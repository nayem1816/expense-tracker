import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddBalance = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:8080/api/v1/balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 'success') {
          toast.success(data.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
          navigate("/");
        }
      });
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold">Add Balance</h2>

      <div className="form my-5 mx-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 w-100 lg:w-1/2">
            <label
              htmlFor="balance"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Enter your balance
            </label>
            <input
              type="balance"
              id="balance"
              {...register("balance", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.balance && (
              <span className="text-red-500">
                Please enter amount this field.
              </span>
            )}
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

export default AddBalance;
