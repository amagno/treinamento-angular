import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { LocalStore } from '../local-store';
import { TodosService } from '../todos.service';
import { PersistLocal } from '../persist-local';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // hello = 'Hello World';
  todos: Todo[];
  storage: PersistLocal<boolean>;
  filter: boolean;
  find = '';
  constructor(
    private todosService: TodosService
  ) {
    this.storage = new PersistLocal<boolean>('todos-filter', false);
    this.filter = this.storage.getStorage();
    console.log(this.storage.getStorage());
  }
  handleFind() {
    this.todosService.dispatchChanges();
  }
  toggleFilter() {
    this.filter = !this.filter;
    this.storage.saveStorage(this.filter);
    this.todosService.dispatchChanges();
  }
  ngOnInit() {
    this.todosService.getTodos().subscribe(s => {
      if (this.filter) {
        this.todos = s.filter(t => !t.checked);
        return;
      }
      if (this.find.length > 1) {
        const reg = new RegExp(this.find, 'i');
        this.todos = s.filter(t => reg.test(t.name));
        return;
      }
      this.todos = s;
    });
  }

}
