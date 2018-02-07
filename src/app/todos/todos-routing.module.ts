import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  { path: 'todos', component: ContainerComponent, children:
    [
      { path: '', component: TodoListComponent },
      { path: ':id', component: TodoEditComponent, outlet: 'edit' }
    ]
  },
  { path: '**', redirectTo: 'todos', pathMatch: 'full' }

  // { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
