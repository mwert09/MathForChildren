import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import AuthContext from "../../context/auth/authContext";

import './navbar.scss';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li style={{color: "#e2f3f5", fontWeight: "900", marginRight: "10px", marginTop: "7px"}}>Merhaba {user && user.name}</li>
      <li className="nav-item active">
        <a className="nav-link" onClick={onLogout} href="#!">
        <div className="simge">
        <i className="fas fa-sign-out-alt simge"  style={{color: "#21e6c1"}}></i>{" "}
          <span className="hide-sm" >Çıkış</span>
        </div>
          
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item active">
        <Link className="nav-link" style={{color: "#21e6c1", fontWeight: "900"}} to="/register">
          Kayıt ol
        </Link>
      </li>
      <li>
        <Link className="nav-link" style={{color: "#21e6c1", fontWeight: "900"}} to="/login">
          Giriş Yap
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top" style={{backgroundColor: "#071e3d"}}>
      <h1>
        <i className={icon} style={{color: "#21e6c1"}} /> <Link to="/" style={{color: "#21e6c1", fontWeight: "900"}}>Eğlenceli Matematik</Link>
      </h1>
      <button className="navbar-toggler" style={{color: "#21e6c1", backgroundColor: "#21e6c1"}} type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Cocuklar Icin Matemaik",
  icon: "fas fa-infinity",
};

export default Navbar;

/*
<div className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
          {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>


<nav className="navbar navbar-expand-md navbar-light fixed-top" style={{backgroundColor: "#e3f2fd"}}>
      <h1>
        <i className={icon}/> {title}
      </h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>

    <header className="masthead mb-auto text-center">
      <div className="inner">
        <h1 style={{color: "#0e153a", fontFamily: " font-family: 'Mulish', sans-serif", fontWeight: "900"}}>
          <i className={icon} /> Çocuklar İçin Matematik
        </h1>
        <nav className="nav nav-masthead justify-content-center">
        {isAuthenticated ? authLinks : guestLinks}
        </nav>
      </div>
    </header>
*/
