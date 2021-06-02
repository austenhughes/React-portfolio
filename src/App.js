// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import Portfolio from "./pages/Portfolio/index";
import Bio from "./pages/Bio/index";

import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Switch>

        <Route exact path={["/", "/home"]}>
            <Home />
          </Route>

        <Route exact path={["/bio"]}>
            <Bio />
          </Route>

        <Route exact path={["/portfolio"]}>
            <Portfolio />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
