import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosService } from './todos.service';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';
import { StoreService } from './store.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TodoListComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodosComponent,
  ],
  providers: [
    StoreService,
    TodosService,
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
