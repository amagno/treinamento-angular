import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import { StoreService } from './store.service';
import { Store } from './flux/store';
import { todosActions } from './flux/reducers/todos';
import { v4 } from 'uuid';
import { todosFilterActions } from './flux/reducers/todos-filter';
import { RootState } from './flux/reducers/root';


@Injectable()
export class TodosService {
  private store: Store<RootState>;
  constructor(
    private storeService: StoreService
  ) {
    this.store = this.storeService.get();
  }
  getTodos(): Observable<Todo[]> {
    return this.store.map(({ filter, todos }) => {
      if (filter === 'ALL') {
        return todos;
      }
      if (filter === 'CHECKED') {
        return todos.filter(t => t.checked === true);
      }
      if (filter === 'NOT_CHECKED') {
        return todos.filter(t => t.checked === false);
      }
    });
  }
  addTodo(name: string): void {
    const todo = Object.assign({}, { id: v4(), name, checked: false });
    this.store.dispatch({
      type: todosActions.ADD_TODO,
      payload: todo
    });
  }
  toggleChecked(id: number): void {
    this.store.dispatch({
      type: todosActions.TOGGLE_CHECKED,
      payload: id
    });
  }
  removeTodo(id: number): void {
    this.store.dispatch({
      type: todosActions.REMOVE_TODO,
      payload: id
    });
  }
  setFilter(filter: string) {
    this.store.dispatch({
      type: todosFilterActions.SET_FILTER,
      payload: filter
    });
  }
  getFilter() {
    return this.store.select('filter');
  }
}
