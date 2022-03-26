import React, { Component } from 'react';

import styles from './Page404.module.scss';

export default class Page404 extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <p>Запрашиваемая страница не найдена</p>
        <img src="/img/sad.png" width="341" height="311" alt="" />
      </div>
    );
  }
}
