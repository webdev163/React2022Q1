import React, { Component } from 'react';
import { TimeCheckboxProps } from './types';
import { FormFieldTypes } from '../../../utils/types';

import styles from './TimeCheckbox.module.scss';

export default class TimeCheckbox extends Component<TimeCheckboxProps, Record<string, never>> {
  render() {
    return (
      <label className="label">
        <span className="label-text">Время доставки:</span>
        <div className={styles.slide}>
          <label className="label-checkbox" htmlFor="checkbox-call">
            дневное
          </label>
          <input
            className="slide-checkbox"
            type="checkbox"
            name={FormFieldTypes.TIME}
            id="checkbox-call"
            ref={this.props.forwardRef}
          />
          <label className="custom-checkbox" htmlFor="checkbox-call"></label>
          <label className="label-checkbox" htmlFor="checkbox-call">
            вечернее
          </label>
        </div>
      </label>
    );
  }
}
