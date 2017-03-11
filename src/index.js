import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
const { Router, Route, IndexRoute, hashHistory } = require('react-router');

const store = createStore(reducer);

const Index = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/'>
            <IndexRoute component={App} />
          </Route>
        </Router>
      </Provider>
    );
  }
});

module.exports = Index;
