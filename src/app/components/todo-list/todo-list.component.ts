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
  search: string = '';
  allTodoSubscription: Subscription = new Subscription();
  allTodos: Item[] = [];

  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.allTodoSubscription = this.todoService.allItemsObs$.subscribe(
      (todos) => {
        this.allTodos = todos;
        this.allTodos$ = this.filter(this.search);
      }
    );
  }

  onSubmit() {
    this.allTodos$ = this.filter(this.search);
  }

  filter(search: string): Observable<Item[]> {
    return new Observable((observer) => {
      const filtered = this.allTodos.filter((item) =>
        item.description.toLowerCase().includes(search.toLowerCase())
      );
      observer.next(filtered);
      observer.complete();
    });
  }

  ngOnDestroy() {
    this.allTodoSubscription.unsubscribe();
  }
}
