import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  }
}
