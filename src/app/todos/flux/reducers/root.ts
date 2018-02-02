import { Action, Reducer } from '../store';
import { todosReducer } from './todos';
import { Todo } from '../../todo';
import { todosFilterReducer } from './todos-filter';

export const combineReducers = reducers => (state, action: Action) => {
  return Object.keys(reducers).reduce((nextState, key) => {
    nextState[key] = reducers[key](state[key], action);
    return nextState;
  }, {});
};

export interface RootState {
  todos: Todo[];
  filter: string;
}

export const rootReducers = combineReducers({
  todos: todosReducer,
  filter: todosFilterReducer
});
