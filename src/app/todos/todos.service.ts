import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import { StoreService } from './store.service';
import { Store } from './flux/store';
import { todosActions } from './flux/reducers/todos';
import { v4 } from 'uuid';
import { todosFilterActions } from './flux/reducers/todos-filter';
import { RootState } from './flux/reducers/root';
import { filterSearchTodos, filterTodos } from './utils';

@Injectable()
export class TodosService {
  private store: Store<RootState>;
  private search: RegExp;
  constructor(
    private storeService: StoreService
  ) {
    this.store = this.storeService.get();
  }
  getTodoById(id: string): Todo {
    return Object.assign({}, this.store.value.todos.find(todo => todo.id === id));
  }
  getTodos(): Observable<Todo[]> {
    return this.store.map(({ filter, todos }) => {
      return filterSearchTodos(filterTodos(todos, filter), this.search);
    });
  }
  addTodo(name: string): void {
    const todo = Object.assign({}, { id: v4(), name, checked: false });
    this.store.dispatch({
      type: todosActions.ADD_TODO,
      payload: todo
    });
  }
  editTodo(todo: Todo): void {
    if (!todo.id || !todo.name || typeof todo.checked === 'undefined') {
      throw new Error(`EDIT TODO IS INVALID: ${todo.id} ${todo.name} ${todo.checked}`);
    }
    this.store.dispatch({
      type: todosActions.EDIT_TODO,
      payload: todo
    });
  }
  searchTodos(regex: RegExp): void {
    this.search = regex;
    // Not action its only for update store
    this.store.dispatch({});
  }
  toggleChecked(id: string): void {
    this.store.dispatch({
      type: todosActions.TOGGLE_CHECKED,
      payload: id
    });
  }
  removeTodo(id: string): void {
    this.store.dispatch({
      type: todosActions.REMOVE_TODO,
      payload: id
    });
  }
  setFilter(filter: string): void {
    this.store.dispatch({
      type: todosFilterActions.SET_FILTER,
      payload: filter
    });
  }
  getFilter(): Observable<string> {
    return this.store.select<string>('filter');
  }
}
