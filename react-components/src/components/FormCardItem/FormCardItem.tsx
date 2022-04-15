import React, { FC } from 'react';
import { FormCardItemProps } from './types';

import styles from './FormCardItem.module.scss';

const FormCardItem: FC<FormCardItemProps> = ({
  index,
  name,
  date,
  delivery,
  time,
  image,
  agree,
}) => {
  return (
    <li className={styles.wrapper}>
      <p className={styles.title}>{`Заказ № ${index}`}</p>
      <p className={styles.text}>{`Имя: ${name}`}</p>
      <p className={styles.text}>{`Дата доставки: ${date}`}</p>
      <p className={styles.text}>{`Тип доставки: ${delivery}`}</p>
      <p className={styles.text}>{`Время доставки: ${time}`}</p>
      <p className={styles.text}>{agree && '✔ согласен на обработку персональных данных'}</p>
      <p className={styles.text}>Дополнительная информация (фото):</p>
      <div className={styles.img}>
        <img src={image as string} alt="" />
      </div>
    </li>
  );
};

export default FormCardItem;
