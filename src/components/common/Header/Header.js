import React, { Component } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import smallLogo from "../../../assets/images/small-logo.png";
const Header = () => {

  const navigate = useNavigate();
  let dataFromApi = useSelector((state) => { return state.userData.data});

  return <div><header className="main-header">

    <div className="header-lower">
      <div className="auto-container">
        <div className="outer-box">
          <figure className="logo-box"><a href="index.html"><img src={Logo} alt="" /></a></figure>
          <div className="menu-area">
            <div className="mobile-nav-toggler">
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  {dataFromApi.email ? 
                  <>
                  <li className="current"><a href="" onClick={() => {navigate('/')}}>Home</a>

                  </li>
                  <li className=""><a href="" onClick={() => {navigate('/blog')}}>Blog</a>
                    
                  </li>
                  </> : <>
                  <li><a href="" onClick={() => {navigate('/login')}}>Login</a></li>
                  <li><a href="" onClick={() => {navigate('/signup')}}>Signup</a></li>
                  </>}
                </ul>
              </div>
            </nav>
          </div>

        </div>
      </div>
    </div>

    <div className="sticky-header">
      <div className="auto-container">
        <div className="outer-box clearfix">
          <div className="logo-box pull-left">
            <figure className="logo"><a href="index.html"><img src={smallLogo} alt="" /></a></figure>
          </div>
          <div className="menu-area pull-right">
            <nav className="main-menu clearfix">
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header></div>;
}

export default Header;
