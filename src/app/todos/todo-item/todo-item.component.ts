import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input('todo') todo: Todo;
  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
    // console.log(this.todo);
  }
  handleChecked(id: number) {
    this.todosService.toggleChecked(id);
    console.log(this.todosService.getTodos());
  }
  handleRemove(id: number) {
    this.todosService.removeTodo(id);
    console.log(this.todosService.getTodos());
  }
}
