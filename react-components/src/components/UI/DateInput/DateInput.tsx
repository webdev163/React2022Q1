import React, { Component } from 'react';
import { DateInputProps } from './types';
import { ErrorTypes, FormFieldTypes } from '../../../utils/types';
import RequiredMessage from '../../Validation/RequiredMessage';
import InvalidDateMessage from '../../Validation/InvalidDateMessage';

import styles from './DateInput.module.scss';

export default class DateInput extends Component<DateInputProps, Record<string, never>> {
  render() {
    return (
      <label className="label">
        <span className="label-text">Дата доставки:</span>
        <input
          className={styles.input}
          type="date"
          name={FormFieldTypes.DATE}
          ref={this.props.forwardRef}
          onChange={(e) => this.props.hideValidationErr(e)}
        />
        {this.props.errorsArr.includes(ErrorTypes.DATE_REQUIRED) && <RequiredMessage />}
        {this.props.errorsArr.includes(ErrorTypes.DATE_INVALID) && <InvalidDateMessage />}
      </label>
    );
  }
}
