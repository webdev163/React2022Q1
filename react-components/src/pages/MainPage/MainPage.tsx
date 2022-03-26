import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm';
import { MainPageState } from './types';

import styles from './MainPage.module.scss';

export default class MainPage extends Component {
  // constructor() {
  //   super(null);
  //   // this.state = {};
  // }

  render() {
    return (
      <div>
        <div className={styles.formWrapper}>
          <SearchForm />
        </div>
      </div>
    );
  }
}
