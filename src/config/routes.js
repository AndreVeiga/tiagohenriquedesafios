import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import endpoint from './endpoint';

import Main from '../components/main';
import Desafios from '../components/desafios';
import Alfabeto from '../components/desafios/alfabeto';

export default function routes() {
  return (
    <Router>
        <Switch>
          <Route exact path={endpoint.index}><Main/></Route>
          <Route exact path={endpoint.desafios}><Desafios/></Route>
          <Route exact path={endpoint.alfabeto}><Alfabeto/></Route>
        </Switch>
    </Router>
  );
}
