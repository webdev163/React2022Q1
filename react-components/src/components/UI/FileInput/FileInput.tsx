import React, { FC } from 'react';
import { FileInputProps } from './types';
import { ErrorTypes, FormFieldTypes, ErrorMessages } from '../../../utils/types';
import ErrorMessage from '../../FormErrorMessage';

const Test: FC<FileInputProps> = ({ forwardRef, errorsArr, errReset }) => {
  return (
    <label className="label">
      <span className="label-text">
        Доп. информация <br /> (фото):
      </span>
      <input
        type="file"
        name={FormFieldTypes.IMAGE}
        ref={forwardRef}
        onChange={(e) => errReset(e)}
        data-testid="file-input"
      />
      {errorsArr.includes(ErrorTypes.IMAGE_REQUIRED) && (
        <ErrorMessage text={ErrorMessages.IMAGE_REQUIRED} />
      )}
    </label>
  );
};

export default Test;
