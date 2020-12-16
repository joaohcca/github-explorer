import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

import Repository from '../pages/Repository';

/** switch garante que apenas uma das rotas é exibida
 * o exact serve para garantir que a raiz so abre na raiz */
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
