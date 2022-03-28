import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import Page404 from '../pages/Page404';

class AppRouter extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    );
  }
}

export default AppRouter;
