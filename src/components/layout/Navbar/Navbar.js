import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper ">
          <a href="/Portfolio" className="brand-logo">
            My Portfolio
          </a>
          <a
            href="/Portfolio"
            data-target="mobile-demo"
            className="sidenav-trigger"
          >
            <i className="material-icons" id="menu" >menu</i>
          </a>
          <ul className="right hide-on-med-and-down ">
            <li>
              <Link to="/Portfolio">Intro</Link>
            </li>
            <li>
              <Link to="/about">My Profile</Link>
            </li>
            <li>
              <Link to="/myportfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/testimonial">Testimonials</Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/Portfolio">Intro</Link>
        </li>
        <li>
          <Link to="/about">My Profile</Link>
        </li>
        <li>
          <Link to="/myportfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/testimonial">Testimonials</Link>
        </li>
        <footer className="navbar-footer">
          <a
            target="_blank"
            href="https://github.com/ViataF"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" />
          </a>
          <a
            target="_blank"
            href="https://za.linkedin.com/in/viata-fredericks-2580151ab"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" />
          </a>
          <a
            target="_blank"
            href="mailto:viataruth@gmail.com"
            rel="noopener noreferrer" 
          >
            <i className="fa fa-google" />
          </a>
        </footer>
      </ul>
    </header>
  );
};

export default Navbar;
