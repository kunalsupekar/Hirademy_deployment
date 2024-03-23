// Header.js
import React, { useState } from 'react';
import { Link } from "react-scroll";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { loginWithRedirect,logout, user, isAuthenticated} = useAuth0();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleGetStarted = () => {
    // Redirect to the Google Form URL after clicking the button
    window.location.href = "https://forms.gle/zcXM6YwiU4bwxmy1A";
  };
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
            hirademy
          </Link>
        </h1>
        <nav id="navbar" className={`navbar ${isNavOpen ? 'navbar-mobile' : ''}`}>
         <ul>
            <li>
              <Link
                to="hero"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="programs"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Our Programs
              </Link>
            </li>
            <li>
              <Link
                to="products"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li>
            {isAuthenticated ? (
    <div className="dropdown text-end ms-2">
      <Link type="button" className="dropdown-toggle btn" data-bs-toggle="dropdown">
        <p className="text-sm">{user.name}</p>
      </Link>
      <ul className="dropdown-menu block">
         <li>
          {/* <Link to={"/profile"} className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-500">
            Profile
          </Link> */}
          <Link className="dropdown-itemblock px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Link>
        </li> 
        {/* Add other dropdown items here if needed */}
      </ul>
    </div>
  ) : (
    <button className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3 d-none d-lg-block" onClick={() => loginWithRedirect()}>Get Started</button>
  )}
</li>

          </ul>
          <i className={`bi ${isNavOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} onClick={toggleNav}></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
