import React from 'react';
import App from './components/App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const Index = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={App} />
      </Route>
    </Router>
  );
};

export default Index;
