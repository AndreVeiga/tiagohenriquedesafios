import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import endpoint from './endpoint';

import Main from '../components/main';
import Desafios from '../components/desafios';
import Alfabeto from '../components/desafios/alfabeto';
import Numeros from '../components/desafios/numeros';
import Colors from '../components/desafios/colors';

export default function routes() {
  return (
    <Router>
        <Switch>
          <Route exact path={endpoint.index}><Main/></Route>
          <Route exact path={endpoint.desafios}><Desafios/></Route>
          <Route exact path={endpoint.alfabeto}><Alfabeto/></Route>
          <Route exact path={endpoint.numeros}><Numeros/></Route>
          <Route exact path={endpoint.colors}><Colors/></Route>
        </Switch>
    </Router>
  );
}
