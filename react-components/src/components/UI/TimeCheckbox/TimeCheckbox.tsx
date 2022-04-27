import React, { useEffect } from 'react';
import { FormDataValues } from '../../../types/types';
import { useController, UseControllerProps } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/redux';
import { setTime } from '../../../store/reducers/formSlice';

import styles from './TimeCheckbox.module.scss';

const TimeCheckbox = (props: UseControllerProps<FormDataValues, 'time'>) => {
  const { field } = useController(props);
  const { value } = field;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTime(value));
  }, [dispatch, value]);

  return (
    <label className="label">
      <span className="label-text">Время доставки:</span>
      <div className={styles.slide}>
        <label className="label-checkbox" htmlFor="checkbox-call">
          дневное
        </label>
        <input className="slide-checkbox" type="checkbox" id="checkbox-call" {...field} />
        <label
          className="custom-checkbox"
          htmlFor="checkbox-call"
          data-testid="custom-checkbox"
        ></label>
        <label className="label-checkbox" htmlFor="checkbox-call">
          вечернее
        </label>
      </div>
    </label>
  );
};

export default TimeCheckbox;
