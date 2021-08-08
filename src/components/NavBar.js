import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="https://ozz.bio/images/logo.png" alt="logo" />
          </Link>

          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>

            <ul className="navbar-nav me-auto flex-row">
              <li className="nav-item me-3">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
