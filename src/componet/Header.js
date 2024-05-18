import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "./style.css";

const Header = () => {
  return (
    <div className="m-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img className="logo" src={logo} alt="" />
            <span className="heading mx-2 fw-bold">PATIENT REGISTRATION</span>
          </Link>

          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarCollapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="patient/create" className="nav-link me-2 fs-6 fw-bold text-dark" >
                 RegisterPatient
                </Link>
              </li>
              <li className="nav-item">
                <Link to="patient/list" className="nav-link fs-6 me-2 fw-bold text-dark" >
                  ViewPatientDetails
                </Link>
              </li>
          
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
