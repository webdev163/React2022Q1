import React, { useEffect } from 'react';
import { ErrorMessages, FormDataValues } from '../../../types/types';
import ErrorMessage from '../../FormErrorMessage';
import { useController, UseControllerProps } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/redux';
import { setAgree } from '../../../store/reducers/formSlice';

import styles from './AgreeCheckbox.module.scss';

const AgreeCheckbox = (props: UseControllerProps<FormDataValues, 'agree'>) => {
  const { field, formState } = useController(props);
  const { value } = field;
  const { errors } = formState;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAgree(value));
  }, [dispatch, value]);

  return (
    <div className={styles.agree}>
      <input type="checkbox" id="agree" data-testid="agree-checkbox" {...field} />
      <label htmlFor="agree">согласен на обработку персональных данных</label>
      {errors.agree && errors.agree.type === 'validate' && (
        <ErrorMessage text={ErrorMessages.AGREE_REQUIRED} />
      )}
    </div>
  );
};

export default AgreeCheckbox;
