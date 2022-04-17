import React from 'react';
import { ErrorMessages, FormDataValues } from '../../../utils/types';
import ErrorMessage from '../../FormErrorMessage';
import { useController, UseControllerProps } from 'react-hook-form';

import styles from './DeliverySelect.module.scss';

const DeliverySelect = (props: UseControllerProps<FormDataValues, 'delivery'>) => {
  const { field, formState } = useController(props);
  const { errors } = formState;

  return (
    <label className="label">
      <span className="label-text">Тип доставки:</span>
      <select className={styles.select} {...field}>
        <option disabled value="default">
          Выберите тип доставки
        </option>
        <option>доставка до двери</option>
        <option>доставка до постамата</option>
        <option>самовывоз</option>
      </select>
      {errors.delivery && errors.delivery.type === 'validate' && (
        <ErrorMessage text={ErrorMessages.DELIVERY_REQUIRED} />
      )}
    </label>
  );
};

export default DeliverySelect;
