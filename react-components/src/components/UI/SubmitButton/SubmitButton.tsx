import React, { Component } from 'react';
import { SubmitButtonProps } from './types';

import styles from './SubmitButton.module.scss';

export default class SubmitButton extends Component<SubmitButtonProps, Record<string, never>> {
  render() {
    return (
      <button
        type="submit"
        className={styles.button}
        disabled={this.props.isButtonDisabled || this.props.errorsArr.length > 0}
      >
        Оформить заказ
      </button>
    );
  }
}
