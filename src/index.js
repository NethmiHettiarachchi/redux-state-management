import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index';
const { Router, Route, IndexRoute, hashHistory, browserHistory } = require('react-router');

const store = createStore(rootReducer);

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
