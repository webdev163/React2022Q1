import React, { Component } from 'react';
import { FormRef } from '../../utils/types';
import { FormProps } from './types';
import { fileReader } from '../../utils/fileReader';

import styles from './Form.module.scss';

export default class Form extends Component<FormProps, Record<string, never>> {
  formRef: FormRef;

  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formRef = {
      name: React.createRef(),
      date: React.createRef(),
      delivery: React.createRef(),
      time: React.createRef(),
      image: React.createRef(),
      agree: React.createRef(),
    };
  }

  async handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const {
      name: nameRef,
      date: dateRef,
      delivery: deliveryRef,
      time: timeRef,
      image: imageRef,
      agree: agreeRef,
    } = this.formRef;
    const name = nameRef.current?.value || '';
    const date = dateRef.current?.value || '';
    const delivery = deliveryRef.current?.value || '';
    const time = timeRef.current?.checked ? 'вечернее' : 'дневное';
    const agree = agreeRef.current?.checked || false;
    let image: string | null = null;
    if (imageRef.current?.files) {
      image = (await fileReader(imageRef.current?.files[0])) as string;
    }
    this.props.setFormState({ name, date, delivery, time, image, agree });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          <span className={styles.text}>Имя:</span>
          <input className={styles.input} type="text" name="name" ref={this.formRef.name} />
        </label>
        <label className={styles.label}>
          <span className={styles.text}>Дата доставки:</span>
          <input className={styles.input} type="date" name="birthdate" ref={this.formRef.date} />
        </label>
        <label className={styles.label}>
          <span className={styles.text}>Тип доставки:</span>
          <select name="delivery" ref={this.formRef.delivery} className={styles.select}>
            <option>доставка до двери</option>
            <option>доставка до постамата</option>
            <option>самовывоз</option>
          </select>
        </label>
        <label className={styles.label}>
          <span className={styles.text}>Время доставки:</span>
          <div className={styles.slide}>
            <label className="label-checkbox" htmlFor="checkbox-call">
              дневное
            </label>
            <input
              className="slide-checkbox"
              type="checkbox"
              name="time"
              id="checkbox-call"
              ref={this.formRef.time}
            />
            <label className="custom-checkbox" htmlFor="checkbox-call"></label>
            <label className="label-checkbox" htmlFor="checkbox-call">
              вечернее
            </label>
          </div>
        </label>
        <label className={styles.label}>
          <span className={styles.text}>
            Доп. информация <br /> (фото):
          </span>
          <input type="file" name="image" ref={this.formRef.image} />
        </label>
        <div className={styles.agree}>
          <input type="checkbox" name="agree" id="agree" ref={this.formRef.agree} />
          <label htmlFor="agree">согласен на обработку персональных данных</label>
        </div>
        <button type="submit" className={styles.button}>
          Оформить заказ
        </button>
      </form>
    );
  }
}
