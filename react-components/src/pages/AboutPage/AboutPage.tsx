import React, { Component } from 'react';

import styles from './AboutPage.module.scss';

export default class AboutPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>О нас</h1>
        <p>Самая крутая компания с самой крутой пиццей в мире!</p>
      </div>
    );
  }
}
