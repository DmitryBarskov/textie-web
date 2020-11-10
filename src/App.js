import React from 'react';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-6">
        <a className="navbar-brand" href="#">textie</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#">Courses</a>
            <a className="nav-link" href="#">Map</a>
            <a className="nav-link" href="#">Hello</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
