import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Item } from 'src/app/interfaces/item';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  allTodos$: Observable<Item[]> = new Observable<Item[]>();

  constructor(public todoService: TodoService) {
    this.allTodos$ = this.todoService.allItemsObs$;
  }
}
