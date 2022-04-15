import React, { FC, useEffect, useState } from 'react';
import { SearchFormProps } from './types';

import styles from './SearchForm.module.scss';

const SearchForm: FC<SearchFormProps> = ({ setQuery }) => {
  const [formValue, setFormValue] = useState<string>('');

  useEffect(() => {
    const prevValue = localStorage.getItem('webdev163-search-query') || '';
    setQuery(prevValue);
    setFormValue(prevValue);
  }, [setQuery]);

  const updateFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    target && setFormValue(target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(formValue);
    localStorage.setItem('webdev163-search-query', formValue);
  };

  return (
    <form className={styles.form} onSubmit={(e: React.FormEvent) => onSubmit(e)}>
      <input
        name="search"
        type="text"
        placeholder="Поиск"
        className={styles.input}
        value={formValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormValue(e)}
      />
      <button type="submit" className={styles.button}>
        Find
      </button>
    </form>
  );
};

export default SearchForm;
