import React, { useState } from "react";
//import { useLocation } from 'react-router-dom';
// import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import dataHeader from "./data.json";
import { Link, useHistory } from "react-router-dom";

import { logout } from "../Redux/actions/userActions";
//import './theme-color/color-1.css'
const URL = require("./constants");

const Header1 = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  // let location = useLocation();
  // console.log(location.pathname);
  // console.log(dataHeader.data.home[0]);
  // if(location.pathname === "/"){
  // 	require('./theme-color/color-1.css');
  // }
  const storedPage = localStorage.getItem("page");
  const [breadcrumb] = useState(storedPage);
  const fun = (value) => {
    localStorage.setItem("page", value);
  };
  return (
    <>
      {/* <Loader /> */}
      <header id="site-header" className="header header-1">
        <div className="container-fluid">
          <div id="header-wrap" className="box-shadow">
            <div className="row">
              <div className="col-lg-12">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand logo" href="/">
                    {/* <img
											id="logo-img"
											className="img-center"
											src={`${URL.img_url}${dataHeader.data.home[0].logo}`}
											alt=""
										/> */}
                    <h3>Business Easy</h3>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    {" "}
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                  >
                    {/* Left nav */}
                    <ul
                      id="main-menu"
                      className="nav navbar-nav ml-auto mr-auto"
                    >
                      <li className="nav-item">
                        {" "}
                        <a className="nav-link" href="/">
                          Home
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="/about">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a className="nav-link" href="/service">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a className="nav-link" href="/blogs">
                          Blogs
                        </a>
                      </li>

                      <li className="nav-item">
                        {" "}
                        <a className="nav-link" href="/contact">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>

                  {userInfo ? (
                    <NavDropdown title={userInfo.user} id="username">
                      {/* <NavDropdown.Item>Profile</NavDropdown.Item> */}
                      <NavDropdown.Item>
                        <Link to="/myorders" style={{ color: "#000" }}>
                          Orders
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/issues" style={{ color: "#000" }}>
                          Issues
                        </Link>
                      </NavDropdown.Item>

                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <a
                      className="btn btn-theme btn-sm"
                      href={`/${dataHeader.data.login.link}`}
                      data-text="Login"
                    >
                      {" "}
                      <span>L</span>
                      <span>o</span>
                      <span>g</span>
                      <span>i</span>
                      <span>n</span>
                    </a>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;
