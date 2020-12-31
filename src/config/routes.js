import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from '../components/main';
import Desafios from '../components/desafios';

export default function routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/desafios">
            <Desafios />
          </Route>
        </Switch>
    </Router>
  );
}
