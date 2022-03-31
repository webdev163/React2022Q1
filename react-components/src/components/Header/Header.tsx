import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <NavLink to="/" className={styles.link} data-testid="main-link">
          Главная
        </NavLink>
        <NavLink to="/form" className={styles.link} data-testid="form-link">
          Форма
        </NavLink>
        <NavLink to="/about" className={styles.link} data-testid="about-link">
          О нас
        </NavLink>
      </div>
    );
  }
}
