import { Reducer } from '../store';
import { Todo } from '../../todo';


export enum todosActions {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  TOGGLE_CHECKED = 'TOGGLE_CHECKED'
}

export const todosReducer: Reducer<Todo[]> = (state, action) => {
  switch (action.type) {
    case todosActions.ADD_TODO: {
      return [
        ...state,
        action.payload
      ];
    }
    case todosActions.TOGGLE_CHECKED: {
      return state.map(t => t.id === action.payload ? { ...t, checked: !t.checked } : t);
    }
    case todosActions.REMOVE_TODO: {
      return state.filter(t => t.id !== action.payload);
    }
    default: {
      return state;
    }
  }
};
