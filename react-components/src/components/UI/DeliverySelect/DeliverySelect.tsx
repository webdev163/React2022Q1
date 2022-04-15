import React, { FC } from 'react';
import { DeliverySelectProps } from './types';
import { ErrorTypes, FormFieldTypes, ErrorMessages } from '../../../utils/types';
import ErrorMessage from '../../FormErrorMessage';

import styles from './DeliverySelect.module.scss';

const DeliverySelect: FC<DeliverySelectProps> = ({ forwardRef, errorsArr, errReset }) => {
  return (
    <label className="label">
      <span className="label-text">Тип доставки:</span>
      <select
        name={FormFieldTypes.DELIVERY}
        ref={forwardRef}
        className={styles.select}
        onChange={(e) => errReset(e)}
        defaultValue={'default'}
      >
        <option disabled value="default">
          Выберите тип доставки
        </option>
        <option>доставка до двери</option>
        <option>доставка до постамата</option>
        <option>самовывоз</option>
      </select>
      {errorsArr.includes(ErrorTypes.DELIVERY_REQUIRED) && (
        <ErrorMessage text={ErrorMessages.DELIVERY_REQUIRED} />
      )}
    </label>
  );
};

export default DeliverySelect;
