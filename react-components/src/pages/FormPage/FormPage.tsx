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
    this.setState({ formStatesArr: [...this.state.formStatesArr, newState] });
  }

  componentDidUpdate() {
    console.log(this.state.formStatesArr);
  }

  render() {
    return (
      <div className="wrapper">
        <div className={styles.form} data-testid="form-page">
          <Form setFormState={this.setFormState} />
        </div>
        <FormCardList statesArr={this.state.formStatesArr} />
      </div>
    );
  }
}
