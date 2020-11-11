import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './components/navigation';
import Routes from './Routes';
import Home from './pages/home';
import Courses from './pages/courses';

const routes = {
  "/courses": <Courses />,
  "/": <Home />,
};

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
    </div>

    <Routes mapping={routes} />
  </Router>
);

export default App;
