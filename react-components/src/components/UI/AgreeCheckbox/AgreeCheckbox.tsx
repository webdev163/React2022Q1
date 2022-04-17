import React from 'react';
import { ErrorMessages, FormDataValues } from '../../../utils/types';
import ErrorMessage from '../../FormErrorMessage';
import { useController, UseControllerProps } from 'react-hook-form';

import styles from './AgreeCheckbox.module.scss';

const AgreeCheckbox = (props: UseControllerProps<FormDataValues, 'agree'>) => {
  const { field, formState } = useController(props);
  const { errors } = formState;

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
