import React from 'react';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-6">
        <a class="navbar-brand" href="#">textie</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#">Courses</a>
            <a class="nav-link" href="#">Map</a>
            <a class="nav-link" href="#">Hello</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
