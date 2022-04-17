import React from 'react';
import { ErrorMessages, FormDataValues } from '../../../utils/types';
import ErrorMessage from '../../FormErrorMessage';
import { useController, UseControllerProps } from 'react-hook-form';

import styles from './DateInput.module.scss';

const DateInput = (props: UseControllerProps<FormDataValues, 'date'>) => {
  const { field, formState } = useController(props);
  const { errors } = formState;

  return (
    <label className="label">
      <span className="label-text">Дата доставки:</span>
      <input className={styles.input} type="date" data-testid="date-input" {...field} />
      {errors.date && errors.date.type === 'required' && (
        <ErrorMessage text={ErrorMessages.DATE_REQUIRED} />
      )}
      {errors.date && errors.date.type === 'validate' && (
        <ErrorMessage text={ErrorMessages.DATE_INVALID} />
      )}
    </label>
  );
};

export default DateInput;
