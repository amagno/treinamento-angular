import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent implements OnInit {
  filters = [
    { name: 'TODOS', value: 'ALL', selected: undefined},
    { name: 'COMPLETADOS', value: 'CHECKED', selected: undefined},
    { name: 'NÃO COMPLETADOS', value: 'NOT_CHECKED', selected: undefined}
  ];
  selectedFilter = 'ALL';
  constructor(
    private todosService: TodosService,
    private loadingService: LoadingService
  ) { }
  changeFilter({ value }) {
    this.loadingService.show();
    this.todosService.setFilter(value);
  }
  ngOnInit() {
    this.todosService.getFilter().subscribe(f => {
      this.selectedFilter = f;
    });
  }

}
