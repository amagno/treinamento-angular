import { Reducer } from '../store';
import { Todo } from '../../todo';


export enum todosFilterActions {
  SET_FILTER = 'SET_FILTER',
}

export const todosFilterReducer: Reducer<Todo[]> = (state, action) => {
  switch (action.type) {
    case todosFilterActions.SET_FILTER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
