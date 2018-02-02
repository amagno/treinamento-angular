import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() addTodo = new EventEmitter<Todo>();

  nameTodo = '';

  constructor(
    private todosService: TodosService
  ) {
  }
  ngOnInit() {
  }
  handleSubmit() {
    if (this.nameTodo.length > 1) {
      this.todosService.addTodo(this.nameTodo);
    }
    // this.model.id = this.todosService.getTodos().length + 2;
    // this.model.checked = false;
    // this.todosService.addTodo(this.model);
    // this.addTodo.emit(this.model);
    // console.log(this.todosService.getTodos());
  }
}
