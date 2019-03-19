import React from 'react';
import ReactDOM from 'react-dom';
// Required for Redux store setup
import { Provider } from 'react-redux'
import configureStore from './Store';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import LoginContainer from './login/LoginContainer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router>
          <main>
            <Route exact path="/" component={LoginContainer} />
            <Route path="/app" component={App} />
          </main>
        </Router>
    </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
