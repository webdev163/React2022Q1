import React, { FC, useContext } from 'react';
import Form from '../../components/Form';
import { FormData } from '../../types/types';
import FormCardList from '../../components/FormCardList';
import { AppContext } from '../../context/AppContext';
import { FormActionTypes } from '../../types/form';

import styles from './FormPage.module.scss';

const FormPage: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const { formStatesArr } = state.form;

  const setFormState = (newState: FormData) => {
    dispatch({
      type: FormActionTypes.SET_FORM_STATES_ARR,
      payload: [newState, ...state.form.formStatesArr],
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.form} data-testid="form-page">
        <Form setFormState={setFormState} />
      </div>
      <h2>Ваши заказы:</h2>
      {formStatesArr.length ? '' : <p>Данные не найдены</p>}
      <FormCardList statesArr={formStatesArr} />
    </div>
  );
};

export default FormPage;
