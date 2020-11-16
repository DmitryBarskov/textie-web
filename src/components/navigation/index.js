import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">textie</Link>

    <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
            aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mr-auto">
        <Link className="nav-link" to="/courses">Courses</Link>
        <a className="nav-link" href="#">Map</a>
        <a className="nav-link" href="#">Progress</a>
      </div>

      <hr className="bg-light"></hr>

      <div className="navbar-nav">
        <a className="nav-link" href="#">Sign in</a>
        <Link className="nav-link" to="/sign_up">Sign up</Link>
      </div>
    </div>
  </nav>
);

export default Navigation;
