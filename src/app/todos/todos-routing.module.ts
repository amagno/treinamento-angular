import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { ErrorComponent } from './error/error.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  { path: 'todos', component: ContainerComponent, children:
    [
      { path: '', component: TodosComponent },
      { path: 'edit/:id', component: TodosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
