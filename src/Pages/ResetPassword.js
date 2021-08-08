import React, { Fragment } from "react";
// form validation
import useForm from "../hooks/useForm";
import validate from "../components/Validation";

import content from "../components/Input";

// assets
import resetImg from "../assets/images/forget_hand.png";
import './ResetPassword.css'

const ResetPassword = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <Fragment>
      <main className="reset__pass__main container">
        <div className="row">
          <p className="col text-center mt-4 reset__text">
            Enter your email to receive 6 digital code
          </p>
        </div>
        <div className="row header__img mt-3 mb-1">
          <img src={resetImg} alt={resetImg} />
        </div>
        <form className="form mt-4" onSubmit={handleSubmit}>
          {content.inputs.slice(2, 3).map((input) => {
            return (
              <div key={input.id} className="mb-3 col-md-8 mx-auto">
                <label className="ms-3 mb-2">{input.label}</label>
                <input
                  name={input.name}
                  type={input.type}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                  className="form-control"
                  value={values[input.name]}
                />
                {errors[input.name] && (
                  <p className="ms-3 invalid__text">{errors[input.name]}</p>
                )}
              </div>
            );
          })}
          <button type="submit" className="btn btn-primary btn-submit mb-1">
            Send Code
          </button>
        </form>
      </main>
    </Fragment>
  );
};

export default ResetPassword;
