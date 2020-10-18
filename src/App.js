import React from 'react';
import './app.scss';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark navbar-pc">
        <a class="navbar-brand" href="#">textie</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="navbar-nav mr-auto mt-2 mt-sm-0">
            <a className="nav-link" href="#">Courses</a>
            <a className="nav-link" href="#">Map</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
