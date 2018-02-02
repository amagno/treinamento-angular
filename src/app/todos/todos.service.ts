import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PersistLocal } from './persist-local';
import { LocalStore } from './local-store';
import 'rxjs/add/operator/filter';
import { uuidv4 } from '../utils';
@Injectable()
export class TodosService {
  private store: LocalStore<Todo[]>;
  private lastId: number;
  constructor(
  ) {
    this.store = new LocalStore<Todo[]>(new PersistLocal('todos', []));
    this.store.save();
  }
  getTodos(): Observable<Todo[]> {
    return this.store;
  }
  addTodo(model: Todo): void {
    const state = this.store.value;
    const todo = Object.assign({}, model, { id: uuidv4(), checked: false });
    const newState = [
      ...state,
      todo
    ];
    this.store.next(newState);
  }
  toggleChecked(id: number): void {
    const state = this.store.value;
    const newState = state.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo);
    this.store.next(newState);
  }
  removeTodo(id: number): void {
    const state = this.store.value;
    const newState = state.filter(todo => todo.id !== id);
    this.store.next(newState);
  }
  dispatchChanges(todos?: Todo[]) {
    this.store.next(todos || this.store.value);
  }
  finish() {
    this.store.unsubscribe();
  }
}
