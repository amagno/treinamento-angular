import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TodosService } from '../todos.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {
  search = new Subject<string>();
  constructor(
    private todosService: TodosService,
    private loadignService: LoadingService
  ) { }
  handleSearch(event) {
    this.search.next(event.target.value);
  }
  ngOnInit() {
    this.search
      .debounceTime(600)
      .distinctUntilChanged()
      .subscribe(search => {
        this.loadignService.show();
        this.todosService.searchTodos(new RegExp(search, 'i'));
      });
  }

}
