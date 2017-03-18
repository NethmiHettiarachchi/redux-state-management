import React from 'react';
import App from './components/App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const Index = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={App} />
        </Route>
      </Router>
    );
  }
});

export default Index;
