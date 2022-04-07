import React, { Component } from 'react';
import { SearchFormProps, SearchFormState } from './types';

import styles from './SearchForm.module.scss';

export default class SearchForm extends Component<SearchFormProps, SearchFormState> {
  constructor(props: SearchFormProps) {
    super(props);
    this.state = {
      formValue: '',
    };
  }

  componentDidMount() {
    const prevValue = localStorage.getItem('webdev163-search-query') || '';
    this.props.setQuery(prevValue);
    this.setState({ formValue: prevValue });
  }

  setFormValue(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    target && this.setState({ formValue: target.value });
  }

  onSubmit(e: React.FormEvent) {
    e.preventDefault();
    this.props.setQuery(this.state.formValue);
    localStorage.setItem('webdev163-search-query', this.state.formValue);
  }

  render() {
    return (
      <form className={styles.form} onSubmit={(e: React.FormEvent) => this.onSubmit(e)}>
        <input
          name="search"
          type="text"
          placeholder="Поиск"
          className={styles.input}
          value={this.state.formValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setFormValue(e)}
        />
        <button type="submit" className={styles.button}>
          Найти
        </button>
      </form>
    );
  }
}
