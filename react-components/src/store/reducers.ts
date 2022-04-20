import { FormAction, FormActionTypes, FormState } from '../types/form';
import { SearchAction, SearchActionTypes, SearchState } from '../types/search';

export const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case FormActionTypes.SET_COUNTER:
      return { ...state, testCounter: action.payload };
    default:
      return state;
  }
};

export const searchReducer = (state: SearchState, action: SearchAction) => {
  switch (action.type) {
    case SearchActionTypes.INC_COUNTER:
      return { ...state, testCounter: state.testCounter + 1 };
    default:
      return state;
  }
};
