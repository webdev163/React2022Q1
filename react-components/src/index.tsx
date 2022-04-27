import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
