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

  edit = false;
  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
    // console.log(this.todo);
  }
  toggleEdit() {
    this.edit = !this.edit;
  }
  handleEdit(todo: Todo) {
    this.todosService.editTodo(todo);
    this.edit = false;
  }
  handleChecked(id: number) {
    this.todosService.toggleChecked(id);
  }
  handleDelete(id: number) {
    this.todosService.removeTodo(id);
  }
}
