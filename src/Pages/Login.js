import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
// react icons
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineGoogle } from 'react-icons/ai'
// form validation
import useForm from "../hooks/useForm";
import validate from "../components/Validation";

import content from "../components/Input";

// assets
import LoginImg from "../assets/images/heart-hand.png";
import './Login.css';

const Login = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <Fragment>
      <main className="container">
        <div className="row flex-column text-center text__welcome mt-2">
          <p className="col">Welcome Back</p>
          <p className="col">Please, Login</p>
        </div>
        <div className="header mt-3 mb-1">
          <img src={LoginImg} alt={LoginImg} />
        </div>
        <div className="row m-auto mb-5 text-center social-icons justify-content-center">
          <div className="col-3 icon">
            <Link to="/facebook" target="_blank">
              <FaFacebookF />
            </Link>
          </div>
          <div className="col-3 icon">
            <Link to="/facebook" target="_blank">
              <FaLinkedinIn />
            </Link>
          </div>
          <div className="col-3 icon">
            <Link to="/google" target="_blank">
              <AiOutlineGoogle />
            </Link>
          </div>
        </div>
        <p className="col text-center mt-4 sing__text">Or Signin with</p>
        <div className="row mt-4 justify-content-center form">
          <div className="col-md-8">
            <form className="form" onSubmit={handleSubmit}>
            {content.inputs.slice(2).map((input) => {
                return (
                  <div key={input.id} className="mb-3">
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
              <Link
                className="d-block text-right mb-4 forget__pass"
                to="/resetpassword"
                target="_blank"
              >
                forget password
              </Link>

              <button type="submit" className="btn btn-primary btn-submit mb-1">
                Containue
              </button>
            </form>
            <Link
              className="d-block text-center mt-5 new__account"
              to="/"
              type="button"
              target="_blank"
            >
              Newbie? Create Account
            </Link>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Login;
