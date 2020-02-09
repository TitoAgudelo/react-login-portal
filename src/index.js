import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Router } from 'react-router-dom';

import { configureFakeAPI } from './helpers';
import { history } from './helpers';
import { store } from './helpers';

import App from './App';

configureFakeAPI();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router history={history}>
        <App />
      </Router>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
