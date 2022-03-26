import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import Page404 from './pages/Page404';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
