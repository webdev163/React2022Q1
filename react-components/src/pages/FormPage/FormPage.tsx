import React, { Component } from 'react';
import Form from '../../components/Form';
import { FormData } from '../../utils/types';
import { FormPageState } from './types';
import FormCardList from '../../components/FormCardList';

import styles from './FormPage.module.scss';

export default class FormPage extends Component<Record<string, never>, FormPageState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.setFormState = this.setFormState.bind(this);
    this.state = {
      formStatesArr: [],
    };
  }

  setFormState(newState: FormData) {
    this.setState({ formStatesArr: [newState, ...this.state.formStatesArr] });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.form} data-testid="form-page">
          <Form setFormState={this.setFormState} />
        </div>
        <h2>Ваши заказы:</h2>
        {this.state.formStatesArr.length ? '' : <p>Данные не найдены</p>}
        <FormCardList statesArr={this.state.formStatesArr} />
      </div>
    );
  }
}
