import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './components/add-form/add-form.component';
import { LoginComponent } from './components/login/login.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodoItemDetailComponent } from './components/todo-item-detail/todo-item-detail.component';

// dev control
let devMode: boolean = false;

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'todo_list',
    canActivate: devMode ? [] : [AuthGuardService],
    component: TodoListComponent,
  },
  {
    path: 'todo_item/:id',
    canActivate: devMode ? [] : [AuthGuardService],
    component: TodoItemDetailComponent,
  },
  {
    path: 'add',
    canActivate: devMode ? [] : [AuthGuardService],
    component: AddFormComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
