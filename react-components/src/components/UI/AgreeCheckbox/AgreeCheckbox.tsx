import React, { Component } from 'react';
import { AgreeCheckboxProps } from './types';
import { ErrorTypes, FormFieldTypes } from '../../../utils/types';
import AgreeMessage from '../../Validation/AgreeMessage';

import styles from './AgreeCheckbox.module.scss';

export default class AgreeCheckbox extends Component<AgreeCheckboxProps, Record<string, never>> {
  render() {
    return (
      <div className={styles.agree}>
        <input
          type="checkbox"
          name={FormFieldTypes.AGREE}
          id="agree"
          ref={this.props.forwardRef}
          onChange={(e) => this.props.hideValidationErr(e)}
        />
        <label htmlFor="agree">согласен на обработку персональных данных</label>
        {this.props.errorsArr.includes(ErrorTypes.AGREE_REQUIRED) && <AgreeMessage />}
      </div>
    );
  }
}
