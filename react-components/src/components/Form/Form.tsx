import React, { Component } from 'react';
import { FormRef } from '../../utils/types';
import { FormProps } from './types';

import styles from './Form.module.scss';

export default class Form extends Component<FormProps, Record<string, never>> {
  formRef: FormRef;

  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formRef = {
      name: React.createRef(),
      date: React.createRef(),
      postindex: React.createRef(),
    };
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name: nameRef, date: dateRef, postindex: postindexRef } = this.formRef;
    const name = nameRef.current?.value || '';
    const date = dateRef.current?.value || '';
    const postindex = postindexRef.current?.value || '';
    this.props.setFormState({ name, date, postindex });
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
          <span className={styles.text}>Почтовый индекс:</span>
          <input
            className={styles.input}
            type="text"
            name="postindex"
            ref={this.formRef.postindex}
          />
        </label>
        <button type="submit" className={styles.button}>
          Оформить заказ
        </button>
      </form>
    );
  }
}
