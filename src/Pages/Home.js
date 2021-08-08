import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import './Home.css'

const Home = () => {
  return (
    <Fragment>
      <main className="home">
        <h2>
          log In to <span>OZZ</span>
        </h2>
        <div>
          New Here? 
          <Link to="/register" className="ms-2">Create an account</Link>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
