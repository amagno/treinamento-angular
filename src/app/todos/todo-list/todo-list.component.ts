import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // hello = 'Hello World';
  todos: Todo[];
  filters = [
    { name: 'TODOS', value: 'ALL' },
    { name: 'COMPLETADOS', value: 'CHECKED'},
    { name: 'NÃO COMPLETADOS', value: 'NOT_CHECKED'}
  ];
  constructor(
    private todosService: TodosService
  ) {}
  changeFilter(event) {
    this.todosService.setFilter(event.target.value);
  }
  ngOnInit() {
    this.todosService.getTodos().subscribe(s => {
      this.todos = s;
    });
    this.todosService.getFilter().subscribe(f => {
      this.filters = this.filters.map(filter => filter.value === f ? { ...filter, selected: true } : filter);
    });
  }

}
