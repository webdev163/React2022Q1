import React, { FC, useState } from 'react';
import Form from '../../components/Form';
import { FormData } from '../../types/types';
import FormCardList from '../../components/FormCardList';

import styles from './FormPage.module.scss';

const FormPage: FC = () => {
  const [formStatesArr, setFormStatesArr] = useState<FormData[] | []>([]);

  const setFormState = (newState: FormData) => {
    setFormStatesArr([newState, ...formStatesArr]);
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
