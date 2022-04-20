import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { AppProvider } from './context/AppContext';

import './index.css';

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById('root')
);
