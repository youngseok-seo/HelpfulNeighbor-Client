import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VolunteerPage from './pages/VoluteerPage';


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/volunteer" component={VolunteerPage} />
        </div>
        
      </Router>
    )
  }
}

export default App;
