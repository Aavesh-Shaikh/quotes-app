import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="quotes_text">Quotes</h3>

      <ul
        className={mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <Link exact to="/" activeClassName="active-tab">
          <li>Home</li>
        </Link>
        <Link to="/about-me" activeClassName="active-tab">
          <li>About Me</li>
        </Link>
        <Link to="/skills" activeClassName="active-tab">
          <li>Skills</li>
        </Link>
        <Link to="/projects" activeClassName="active-tab">
          <li>Projects</li>
        </Link>
        <Link to="/certifications" activeClassName="active-tab">
          <li>Certifications</li>
        </Link>
        {/* <Link to="/portfolio" activeClassName="active-tab">
          <li>Portfolio</li>
        </Link> */}
        <Link to="/contact" activeClassName="active-tab">
          <li>Contact</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
        {mobile ? (
          <span className="hmbgr_icon">
            <ImCross />
          </span>
        ) : (
          <span className="hmbgr_icon">
            <FaBars />
          </span>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
