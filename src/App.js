import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";

import Stopwatch from "./Stopwatch";
import "./App.css";

const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Stopwatch />
        </Route>
        <Route exact path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
}
