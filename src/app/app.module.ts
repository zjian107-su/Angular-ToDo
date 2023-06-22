import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

// I have a few components
// Here is the flow
// Main page: click button, after click the button, it wil redirect to the list page
// List page: show the list of items, and a button to go to new item page (add-form)
// Add-form page: show a form to add new item
// In each loggedin page, I want to have a logout button
// After all of those, I can simulate login guards with Promises and Observables with setTimeout

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'list',
    canActivate: [AuthGuardService],
    component: TodoListComponent,
  },
  { path: 'add', canActivate: [AuthGuardService], component: AddFormComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    AddFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
