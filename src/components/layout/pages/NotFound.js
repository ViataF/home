import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container white-text">
      <h1>Not found</h1>
      <p>The page you are looking for does not exit...</p>
      <Link className="btn btn-dark btn-my1" to="/Portfolio">
        Go back to home page
      </Link>
    </div>
  );
};

export default NotFound;
