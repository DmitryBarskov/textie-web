import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link class="navbar-brand" to="/">textie</Link>

    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link" to="/courses">Courses</Link>
        <a class="nav-link" href="#">Map</a>
        <a class="nav-link" href="#">Progress</a>
      </div>
    </div>
  </nav>
);

export default Navigation;
