import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Item } from 'src/app/interfaces/item';
import {
  Observable,
  Subscription,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  allTodos$: Observable<Item[]> = new Observable<Item[]>();
  allTodoSubscription: Subscription = new Subscription();
  allTodos: Item[] = [];
  search: string = '';
  searchControl = new FormControl();
  loading = true;
  emptyData = false;

  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.allTodoSubscription = this.todoService.allItemsObs$.subscribe(
      (todos) => {
        this.loading = false;
        this.allTodos = todos;
        this.emptyData = todos.length === 0;
        this.allTodos$ = this.filter(this.search);
      }
    );

    this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((newValue) => {
        this.search = newValue;
        this.allTodos$ = this.filter(this.search);
      });
  }

  onSubmit() {
    this.allTodos$ = this.filter(this.searchControl.value);
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
