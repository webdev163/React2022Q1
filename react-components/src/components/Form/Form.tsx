import React, { FC, useState, useEffect, useContext } from 'react';
import { FormDataValues, ErrorMessages } from '../../types/types';
import { FormProps } from './types';
import { fileReader } from '../../utils/fileReader';
import FormModal from '../FormModal';
import NameInput from '../UI/NameInput';
import DateInput from '../UI/DateInput';
import DeliverySelect from '../UI/DeliverySelect';
import TimeCheckbox from '../UI/TimeCheckbox';
import AgreeCheckbox from '../UI/AgreeCheckbox';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../FormErrorMessage';
import { AppContext } from '../../context/AppContext';

import styles from './Form.module.scss';

const Form: FC<FormProps> = ({ setFormState }) => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const { state } = useContext(AppContext);

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
    reset,
    register,
  } = useForm<FormDataValues>({
    defaultValues: {
      name: state.form.name,
      date: state.form.date,
      delivery: state.form.delivery,
      time: state.form.time,
      image: state.form.image,
      agree: state.form.agree,
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const toggleModalActive = () => {
    setIsModalActive((isModalActive) => !isModalActive);
  };

  const onSubmit = async (data: FormDataValues) => {
    const { name, date, delivery } = data;
    const time = data.time ? 'вечернее' : 'дневное';
    const agree = Boolean(data.agree);
    let image: string;
    if (data.image) {
      const blob = data.image[0].slice() as unknown as Blob;
      image = (await fileReader(blob)) as string;
      setFormState({ name, date, delivery, time, image, agree });
    }
    setIsModalActive(true);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} data-testid="form">
        <NameInput
          control={control}
          name="name"
          rules={{ required: true, minLength: 3, pattern: /^[A-Za-zА-Яа-я]+$/i }}
        />
        <DateInput
          control={control}
          name="date"
          rules={{
            required: true,
            validate: (value) => !(Date.parse(value) - Number(new Date()) < 0),
          }}
        />
        <DeliverySelect
          control={control}
          name="delivery"
          rules={{
            validate: (value) => value !== 'default',
          }}
        />
        <TimeCheckbox control={control} name="time" />
        <label className="label">
          <span className="label-text">
            Доп. информация <br /> (фото):
          </span>
          <input
            type="file"
            data-testid="file-input"
            {...register('image', {
              validate: (value) => value !== '',
            })}
          />
          {errors.image && <ErrorMessage text={ErrorMessages.IMAGE_REQUIRED} />}
        </label>
        <AgreeCheckbox
          control={control}
          name="agree"
          rules={{
            validate: (value) => value,
          }}
        />
        <button
          type="submit"
          className={styles.button}
          disabled={Object.keys(errors).length !== 0}
          data-testid="submit-button"
        >
          Оформить заказ
        </button>
      </form>
      <FormModal isActive={isModalActive} toggleModalActive={toggleModalActive} />
    </div>
  );
};

export default Form;
