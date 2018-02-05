import { Reducer } from '../store';
import { Todo } from '../../todo';


export enum todosActions {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  TOGGLE_CHECKED = 'TOGGLE_CHECKED',
  EDIT_TODO = 'EDIT_TODO'
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
    case todosActions.EDIT_TODO: {
      const index = state.findIndex(t => t.id === action.payload.id);
      const clone = state.slice(0);
      clone[index] = {
        ...clone[index],
        ...action.payload
      };
      return clone;
    }
    default: {
      return state;
    }
  }
};
