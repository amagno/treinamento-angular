import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // hello = 'Hello World';
  @Input() todos: Todo[];
  constructor(
  ) { }

  ngOnInit() {
    console.log(this.todos);
  }

}
