import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';
import { Router } from '@angular/router';
import { ContainerService } from '../container.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input('todo') todo: Todo;

  edit = false;
  constructor(
    private todosService: TodosService,
    private router: Router,
    private containerService: ContainerService
  ) { }

  ngOnInit() {
    // console.log(this.todo);
  }
  toggleEdit() {
    this.edit = !this.edit;
  }
  handleEdit(id) {
    // this.todosService.editTodo(todo);
    // this.edit = false;
    this.containerService.openSideNav();
    this.router.navigate(['/', 'todos', { outlets: { edit: [id] }}]);
  }
  handleChecked(id: string) {
    this.todosService.toggleChecked(id);
  }
  handleDelete(id: string) {
    this.todosService.removeTodo(id);
  }
}
