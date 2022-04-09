import React, { Component } from 'react';
import { SearchMainState } from './types';
import SearchForm from '../../components/SearchForm';
import CardList from '../../components/CardList';
import GuardianService from '../../services/GuardianService';
import Loader from '../Loader';

import styles from './SearchMain.module.scss';

export default class SearchMain extends Component<Record<string, never>, SearchMainState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      query: '',
      dataArr: [],
      isLoading: false,
    };
    this.setQuery = this.setQuery.bind(this);
  }

  async componentDidUpdate({}, prevState: SearchMainState) {
    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true });
      const data = await GuardianService.getData(this.state.query);
      this.setState({ dataArr: [...data.response.results] });
      this.setState({ isLoading: false });
      console.log(this.state.dataArr);
    }
  }

  setQuery(query: string) {
    this.setState({ query: query });
  }

  render() {
    return (
      <div data-testid="main-page">
        <div className={styles.formWrapper}>
          <SearchForm setQuery={this.setQuery} />
        </div>
        {this.state.isLoading ? <Loader /> : <CardList dataArr={this.state.dataArr} />}
      </div>
    );
  }
}
