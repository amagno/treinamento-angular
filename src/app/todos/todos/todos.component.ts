import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
    this.todos = this.todosService.getTodos();
    // console.log(this.todos, 'TODOS');
  }
  onAdd(event) {
    console.log(event);
  }

}
