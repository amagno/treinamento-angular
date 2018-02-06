import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos/todos.component';
import { ErrorComponent } from './todos/error/error.component';
const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  // { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
