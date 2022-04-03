import React, { Component } from 'react';
import { DeliverySelectProps } from './types';
import { ErrorTypes, FormFieldTypes } from '../../../utils/types';
import RequiredMessage from '../../Validation/RequiredMessage';

import styles from './DeliverySelect.module.scss';

export default class DeliverySelect extends Component<DeliverySelectProps, Record<string, never>> {
  render() {
    const { forwardRef, errorsArr, errReset } = this.props;
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
        {errorsArr.includes(ErrorTypes.DELIVERY_REQUIRED) && <RequiredMessage />}
      </label>
    );
  }
}
