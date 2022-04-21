import React, { FC, useEffect, useState, useContext } from 'react';
import { SearchFormProps } from './types';
import { AppContext } from '../../context/AppContext';

import styles from './SearchForm.module.scss';

const SearchForm: FC<SearchFormProps> = ({ setQuery }) => {
  const [formValue, setFormValue] = useState<string>('');

  const { state } = useContext(AppContext);
  const { query, dataArr } = state.search;

  useEffect(() => {
    if (!dataArr.length) {
      const prevValue = localStorage.getItem('webdev163-search-query') || '';
      setQuery(prevValue);
      setFormValue(prevValue);
    }
  }, [dataArr, setQuery]);

  useEffect(() => {
    if (query) {
      setFormValue(query);
    }
  }, [query]);

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
