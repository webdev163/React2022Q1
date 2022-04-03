import React, { Component } from 'react';
import { NameInputProps } from './types';
import { ErrorTypes, FormFieldTypes } from '../../../utils/types';
import RequiredMessage from '../../Validation/RequiredMessage';
import ShortMessage from '../../Validation/ShortMessage';
import InvalidMessage from '../../Validation/InvalidMessage';

import styles from './NameInput.module.scss';

export default class NameInput extends Component<NameInputProps, Record<string, never>> {
  render() {
    return (
      <label className="label">
        <span className="label-text">Имя:</span>
        <input
          className={styles.input}
          type="text"
          name={FormFieldTypes.NAME}
          ref={this.props.forwardRef}
          onChange={(e) => this.props.hideValidationErr(e)}
        />
        {this.props.errorsArr.includes(ErrorTypes.NAME_REQUIRED) && <RequiredMessage />}
        {this.props.errorsArr.includes(ErrorTypes.NAME_SHORT) && <ShortMessage />}
        {this.props.errorsArr.includes(ErrorTypes.NAME_INVALID) && <InvalidMessage />}
      </label>
    );
  }
}
