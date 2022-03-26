import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <NavLink to="/" className={styles.link}>
          Главная
        </NavLink>
        <NavLink to="/about" className={styles.link}>
          О нас
        </NavLink>
      </div>
    );
  }
}
