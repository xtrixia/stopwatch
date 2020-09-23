import React, { useEffect, useState } from "react";
import {  BrowserRouter as Router, Route} from "react-router-dom";

import { createBrowserHistory } from "history";

import Stopwatch from "./Stopwatch";
import "./App.css";


const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Route exact path="/">
        <Stopwatch />
      </Route>
      <Route path="/news">
        <h1>404</h1>
      </Route>
    </Router>
  );
}
