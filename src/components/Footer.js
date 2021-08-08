import React from "react";
import { FaFacebookF, FaInstagramSquare } from 'react-icons/fa'
import {  FiTwitter } from 'react-icons/fi'
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="row align-items-center justify-content-center mx-auto">
          <div className="col-md-3">
            <Link className="navbar-brand m-0 p-0" to="/" target="_blank">
              OZZ
            </Link>
          </div>
          <div className="col-md-5 mt-3 mt-md-0">
            <div>
              <div>Copyright &copy; 2021 OZZ. 4.5.2</div>
            </div>
            <div className="mt-3"></div>
          </div>
          <div className="col-12 col-sm-4 mt-3 mt-sm-0 social__footer">
            <Link to={{pathname: "https://www.facebook.com/ozz.co"}} target="_blank" className="me-2">
              <FaFacebookF fill="#4267B2" />
            </Link>
            <Link to={{pathname: "https://www.twitter.com/ozz_co"}} target="_blank" className="me-2">
              <FiTwitter fill="white" />
            </Link>
            <Link to={{pathname: "https://www.instagram.com/ozz.co"}} target="_blank" className="me-2">
              <FaInstagramSquare />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
