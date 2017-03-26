import React from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index';
const { Router, Route, IndexRoute, hashHistory, browserHistory } = require('react-router');

const store = createStore(rootReducer, compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
));

const Index = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/'>
            <IndexRoute component={App} />
          </Route>
        </Router>
      </Provider>
    );
  }
});

export default Index;
