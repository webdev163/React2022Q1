import React, { Component } from 'react';
import { DeliverySelectProps } from './types';
import { ErrorTypes, FormFieldTypes } from '../../../utils/types';
import RequiredMessage from '../../Validation/RequiredMessage';

import styles from './DeliverySelect.module.scss';

export default class DeliverySelect extends Component<DeliverySelectProps, Record<string, never>> {
  render() {
    return (
      <label className="label">
        <span className="label-text">Тип доставки:</span>
        <select
          name={FormFieldTypes.DELIVERY}
          ref={this.props.forwardRef}
          className={styles.select}
          onChange={(e) => this.props.hideValidationErr(e)}
          defaultValue={'default'}
        >
          <option disabled value="default">
            Выберите тип доставки
          </option>
          <option>доставка до двери</option>
          <option>доставка до постамата</option>
          <option>самовывоз</option>
        </select>
        {this.props.errorsArr.includes(ErrorTypes.DELIVERY_REQUIRED) && <RequiredMessage />}
      </label>
    );
  }
}
