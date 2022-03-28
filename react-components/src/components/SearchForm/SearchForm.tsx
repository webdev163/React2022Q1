import React, { Component } from 'react';
import { SearchFormState } from './types';

import styles from './SearchForm.module.scss';

export default class SearchForm extends Component<Record<string, never>, SearchFormState> {
  state: SearchFormState = {
    value: '',
  };

  componentDidMount() {
    this.setState({ value: localStorage.getItem('webdev163-search-query') || '' });
  }

  componentWillUnmount() {
    localStorage.setItem('webdev163-search-query', this.state.value);
  }

  handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    target && this.setState({ value: target.value });
  }

  render() {
    return (
      <form action="" className={styles.form}>
        <input
          name="search"
          type="text"
          placeholder="Поиск"
          className={styles.input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleSearch(e)}
          value={this.state.value}
        />
      </form>
    );
  }
}
