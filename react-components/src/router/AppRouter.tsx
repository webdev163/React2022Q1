import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ArticlePage from '../pages/ArticlePage';
import FormPage from '../pages/FormPage';
import Page404 from '../pages/Page404';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="article" element={<ArticlePage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
