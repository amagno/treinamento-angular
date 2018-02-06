import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() addTodo = new EventEmitter<Todo>();

  nameTodo = '';

  constructor(
    private todosService: TodosService,
    private loadingService: LoadingService
  ) {
  }
  ngOnInit() {
  }
  handleSubmit() {
    if (this.nameTodo.length > 1) {
      this.loadingService.show();
      this.todosService.addTodo(this.nameTodo);
    }
  }
}
