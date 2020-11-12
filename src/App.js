import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './components/navigation';
import Routes from './Routes';
import Home from './pages/home';
import Courses from './pages/courses';
import SignUp from './pages/sign_up';

const routes = {
  "/courses": <Courses />,
  "/sign_up": <SignUp />,
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
