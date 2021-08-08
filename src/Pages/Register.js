import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// react icons
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineGoogle } from 'react-icons/ai'
// form validatiion
import useForm from "../hooks/useForm";
import validate from "../components/Validation";
// assets
import RegisterImg from "../assets/images/heart-hand.png";
import "./Register.css";

const Register = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <Fragment>
      <main className="container">
        <div className="row flex-column text-center text__welcome mt-2">
          <p className="col">Welcome Back</p>
          <p className="col">Please, Register</p>
        </div>
        <div className="header mt-3 mb-1">
          <img src={RegisterImg} alt={RegisterImg} />
        </div>
        <div className="row m-auto mb-5 text-center social-icons justify-content-center">
          <div className="col-3 icon">
            <Link to="/facebook" target="_blank">
            <FaFacebookF />
            </Link>
          </div>
          <div className="col-3 icon">
            <Link to="/linkedin" target="_blank">
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
              <div className="row">
                <div className="mb-3 col-6">
                  <input
                    className="input__name form-control"
                    type="text"
                    id="firstName"
                    placeholder="FIRST NAME"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <p className="ms-3 invalid__text">{errors.firstName}</p>}
                </div>
                <div className="mb-3 col-6">
                  <input
                    className="input__name form-control"
                    type="text"
                    id="lastName"
                    placeholder="LAST NAME"
                    name="lastName"
                    value={values.lastname}
                    onChange={handleChange}
                  />
                  {errors.lastName && <p className="ms-3 invalid__text">{errors.lastName}</p>}
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="ms-3 invalid__text">{errors.email}</p>}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="PASSWORD"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="ms-3 invalid__text">{errors.password}</p>}
              </div>
              <button type="submit" className="btn btn-primary btn-submit mb-sm-1 mb-3 mt-3">
                Containue
              </button>
            </form>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Register;
