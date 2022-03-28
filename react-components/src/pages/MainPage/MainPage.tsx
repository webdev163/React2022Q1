import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm';
import CardList from '../../components/CardList';

import styles from './MainPage.module.scss';

export default class MainPage extends Component {
  render() {
    return (
      <div data-testid="main-page">
        <div className={styles.formWrapper}>
          <SearchForm />
        </div>
        <CardList />
      </div>
    );
  }
}
