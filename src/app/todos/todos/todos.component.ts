import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor(
    // private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // console.log(this.todos, 'TODOS');
    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(id);
  }

}
