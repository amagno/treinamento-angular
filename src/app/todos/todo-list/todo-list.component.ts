import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';
import { Subject } from 'rxjs/Subject';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  constructor(
    private todosService: TodosService,
    private loadginService: LoadingService
  ) {}
  ngOnInit() {
    this.loadginService.show();
    this.todosService.getTodos().subscribe(s => {
      this.todos = s;
    });
  }

}
