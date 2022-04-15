import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/" className={styles.link} data-testid="main-link">
        Main
      </NavLink>
      <NavLink to="/form" className={styles.link} data-testid="form-link">
        Form
      </NavLink>
      <NavLink to="/about" className={styles.link} data-testid="about-link">
        About us
      </NavLink>
    </div>
  );
};

export default Header;
