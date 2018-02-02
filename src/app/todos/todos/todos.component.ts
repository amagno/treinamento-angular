import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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

}
