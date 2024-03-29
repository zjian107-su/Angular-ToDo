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
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodoItemDetailComponent } from './components/todo-item-detail/todo-item-detail.component';
import { PrioTransPipe } from './pipes/prio-trans.pipe';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SessionComponent } from './components/session/session.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusIndicatorDirective } from './directives/status-indicator-directive.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    AddFormComponent,
    LoginComponent,
    PageNotFoundComponent,
    TodoItemDetailComponent,
    PrioTransPipe,
    TopBarComponent,
    UserFormComponent,
    SessionComponent,
    StatusIndicatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
