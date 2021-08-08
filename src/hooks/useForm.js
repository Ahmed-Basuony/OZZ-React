import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    // console.log(values)
    await fetch("http://localhost:3000/login", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
    .then(function (response) {
      console.log(response);
      return response.json();
    });
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
