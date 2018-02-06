import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosService } from './todos.service';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';
import { StoreService } from './store.service';
import { TodosStyleModule } from './todos-style.module';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading.service';
import { TodosRoutingModule } from './todos-routing.module';
import { ErrorComponent } from './error/error.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    TodosStyleModule,
  ],
  declarations: [
    ContainerComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodosComponent,
    TodoSearchComponent,
    TodoFilterComponent,
    LoadingComponent,
    ErrorComponent
  ],
  providers: [
    StoreService,
    TodosService,
    LoadingService
  ],
})
export class TodosModule { }
