import React, { createContext, useReducer, Dispatch } from 'react';
import { searchReducer, formReducer } from '../store/reducers';
import { SearchAction } from '../types/search';
import { FormAction } from '../types/form';
import { InitialState } from '../types/types';

const initialState = {
  search: {
    query: '',
    dataArr: [],
  },
  form: {
    testCounter: 0,
  },
};

const AppContext = createContext<{
  state: InitialState;
  dispatch: Dispatch<SearchAction | FormAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const rootReducer = ({ search, form }: InitialState, action: SearchAction | FormAction) => ({
  search: searchReducer(search, action as SearchAction),
  form: formReducer(form, action as FormAction),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
