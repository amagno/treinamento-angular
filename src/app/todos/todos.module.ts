import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosService } from './todos.service';
import { FormsModule } from '@angular/forms';
import { StoreService } from './store.service';
import { TodosStyleModule } from './todos-style.module';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading.service';
import { TodosRoutingModule } from './todos-routing.module';
import { ContainerComponent } from './container/container.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { ContainerService } from './container.service';
import { LoadingDirective } from './loading/loading.directive';

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
    TodoSearchComponent,
    TodoFilterComponent,
    LoadingComponent,
    LoadingDirective,
    TodoEditComponent,
  ],
  providers: [
    StoreService,
    TodosService,
    LoadingService,
    ContainerService
  ],
})
export class TodosModule { }
