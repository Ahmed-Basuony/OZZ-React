import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/resetpassword" exact>
          <ResetPassword />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
