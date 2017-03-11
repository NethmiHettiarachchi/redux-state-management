const React = require('react');
const Landing = require('./Landing');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');
const { store } = require('./Store');
const { Provider } = require('react-redux');

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' >
            <IndexRoute component={Landing} />
          </Route>
        </Router>
      </Provider>
    );
  }
});

module.exports = App;
