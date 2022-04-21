import React, { useEffect, useContext } from 'react';
import { ErrorMessages, FormDataValues } from '../../../types/types';
import ErrorMessage from '../../FormErrorMessage';
import { useController, UseControllerProps } from 'react-hook-form';
import { AppContext } from '../../../context/AppContext';
import { FormActionTypes } from '../../../types/form';

import styles from './NameInput.module.scss';

const NameInput = (props: UseControllerProps<FormDataValues, 'name'>) => {
  const { field, formState } = useController(props);
  const { value } = field;
  const { errors } = formState;

  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: FormActionTypes.SET_NAME, payload: value });
  }, [dispatch, value]);

  return (
    <label className="label">
      <span className="label-text">Имя:</span>
      <input className={styles.input} type="text" {...field} />
      {errors.name && errors.name.type === 'required' && (
        <ErrorMessage text={ErrorMessages.NAME_REQUIRED} />
      )}
      {errors.name && errors.name.type === 'minLength' && (
        <ErrorMessage text={ErrorMessages.NAME_SHORT} />
      )}
      {errors.name && errors.name.type === 'pattern' && (
        <ErrorMessage text={ErrorMessages.NAME_INVALID} />
      )}
    </label>
  );
};

export default NameInput;
