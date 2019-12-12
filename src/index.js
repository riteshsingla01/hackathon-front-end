import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import SearchPage from './SearchPage'
import Login from './Login'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Router>
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/search' component={SearchPage} />
  </Switch>
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
