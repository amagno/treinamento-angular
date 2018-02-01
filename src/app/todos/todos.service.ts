import { Injectable } from '@angular/core';
import { Todo } from './todo';

const initialState: Todo[] = [
  { id: 1, name: 'test1', checked: false },
  { id: 2, name: 'test1', checked: false },
  { id: 3, name: 'test1', checked: false },
  { id: 4, name: 'test1', checked: false },
  { id: 5, name: 'test1', checked: false },
  { id: 6, name: 'test1', checked: false },
  { id: 7, name: 'test1', checked: false },
  { id: 9, name: 'test1', checked: false },
  { id: 10, name: 'test1', checked: false },
];
const store = (state = initialState): Todo[] => {
  return state;
};

@Injectable()
export class TodosService {
  private store = store();

  getTodos(): Todo[] {
    return this.store;
  }
  addTodo(model: Todo): void {
    const todo = Object.assign({}, model);
    this.store.push(todo);
  }
  getIndexById(id: number): number {
    return this.store.findIndex(t => t.id === id);
  }
  toggleChecked(id: number): void {
    const index = this.getIndexById(id);
    const todo = this.store[index];
     this.store[index] = {
      ...this.store[index],
      checked: !todo.checked
    };
  }
  removeTodo(id: number): void {
    this.store = this.store.filter(t => t.id !== id);
  }
}
