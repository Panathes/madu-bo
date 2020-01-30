import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./components/homepage"
import Questionnr from "./components/questionnr"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/homepage">
            <Homepage/>
          </Route>
          <Route path="/questionnr">
            <Questionnr/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
