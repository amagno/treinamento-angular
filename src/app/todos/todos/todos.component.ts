import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
    // console.log(this.todos, 'TODOS');
  }
  onAdd(event) {
    console.log(event);
  }

}
