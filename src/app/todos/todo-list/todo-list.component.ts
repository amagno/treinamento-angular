import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // hello = 'Hello World';
  todos: Todo[];
  search = new Subject<string>();
  filters = [
    { name: 'TODOS', value: 'ALL' },
    { name: 'COMPLETADOS', value: 'CHECKED'},
    { name: 'NÃO COMPLETADOS', value: 'NOT_CHECKED'}
  ];
  constructor(
    private todosService: TodosService
  ) {}
  handleSearch(event) {
    this.search.next(event.target.value);
  }
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
    this.search
      .debounceTime(600)
      .distinctUntilChanged()
      .subscribe(search => {
        this.todosService.searchTodos(new RegExp(search, 'i'));
      });
  }

}
