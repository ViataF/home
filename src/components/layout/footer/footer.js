import React from "react";
import "./footer.css"
const footer = () => {
  return (
    <div className="footer-container">

      <ul className="contact-holder">
        <li>
        <a
        target="_blank"
        href="https://github.com/ViataF"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github" /> Github
      </a>
        </li>
        <li>
        <a
        target="_blank"
        href="https://za.linkedin.com/in/viata-fredericks-2580151ab"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin" /> LinkedIn
      </a>
        </li>
        <li>
        <a
        target="_blank"
        href="mailto:viataruth@gmail.com"
        rel="noopener noreferrer"
      >
        <i className="fa fa-google" /> Send an email
      </a>
        </li>
      </ul>


  
    </div>
  );
};

export default footer;
