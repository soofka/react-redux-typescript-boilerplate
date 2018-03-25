import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from 'components/Home';
import About from 'components/About';
import NotFound from 'components/NotFound';

import './styles.scss';

export const App = (): JSX.Element => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
