import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import './App.scss';

const App: FC = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
