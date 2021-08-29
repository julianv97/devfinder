import React from "react";
import { Formik, Field, Form } from "formik";
import { BsSearch } from "react-icons/bs";

const FormSearch = ({ handleSearchUser, messageError }) => {
  return (
    <div className="bg-white-content my-10 h-14 shadow-2xl rounded-xl">
      <Formik
        initialValues={{
          user: "",
        }}
        onSubmit={(values) => {
          handleSearchUser(values.user);
        }}
      >
        <Form className="flex items-center justify-between h-full px-2 py-2">
          <div className="flex w-full">
            <label htmlFor="user" className="flex items-center">
              <BsSearch className="text-btn-blue text-2xl" />
            </label>
            <Field
              id="user"
              name="user"
              placeholder="Search Github username..."
              className="bg-white-content outline-none appearance-none focus:bg-white-content w-full flex-shrink-0"
            />
          </div>
          <button
            type="submit"
            className="h-full px-2 w-auto rounded-md bg-btn-blue   hover:bg-btn-blue-hover text-gray-50"
          >
            Search
          </button>
        </Form>
      </Formik>
      <p className="text-red-500">{messageError}</p>
    </div>
  );
};

export default FormSearch;
