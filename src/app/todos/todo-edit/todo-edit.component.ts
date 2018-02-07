import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerComponent } from '../container/container.component';
import { ContainerService } from '../container.service';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  editableTodo: Todo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private containerService: ContainerService,
    private todosServices: TodosService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      const todo = this.todosServices.getTodoById(params.id);
      if (todo) {
        this.editableTodo = todo;
      }
    });

  }
  handleSubmit() {
    this.loadingService.show();
    this.todosServices.editTodo(this.editableTodo);
    this.containerService.closeSideNav();
    this.router.navigate(['/', 'todos']);
  }

}
