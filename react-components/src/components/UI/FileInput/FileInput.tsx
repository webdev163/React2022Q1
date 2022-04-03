import React, { Component } from 'react';
import { FileInputProps } from './types';
import { ErrorTypes, FormFieldTypes } from '../../../utils/types';
import RequiredMessage from '../../Validation/RequiredMessage';

export default class FileInput extends Component<FileInputProps, Record<string, never>> {
  render() {
    return (
      <label className="label">
        <span className="label-text">
          Доп. информация <br /> (фото):
        </span>
        <input
          type="file"
          name={FormFieldTypes.IMAGE}
          ref={this.props.forwardRef}
          onChange={(e) => this.props.hideValidationErr(e)}
        />
        {this.props.errorsArr.includes(ErrorTypes.IMAGE_REQUIRED) && <RequiredMessage />}
      </label>
    );
  }
}
