export interface SearchState {
  testCounter: number;
}

export enum SearchActionTypes {
  INC_COUNTER = 'INC_COUNTER',
}

interface IncCounterAction {
  type: SearchActionTypes.INC_COUNTER;
}

export type SearchAction = IncCounterAction;
