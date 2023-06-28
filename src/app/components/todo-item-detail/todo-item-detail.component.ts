import { Subscription, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../interfaces/item';
import { TodoService } from '../../services/todo.service';
import { PrioTransPipe } from '../../pipes/prio-trans.pipe';

@Component({
  selector: 'app-todo-item-detail',
  templateUrl: './todo-item-detail.component.html',
  styleUrls: ['./todo-item-detail.component.css'],
})
export class TodoItemDetailComponent implements OnInit {
  todos: Item[] = [];
  todo: Item | undefined;
  todoObservable = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    const todoIdFromRoute = this.route.snapshot.paramMap.get('id');

    this.todoObservable = this.todoService.allItemsObs$.subscribe((data) => {
      this.todos = data;
      this.todo = this.todos.find((todo) => {
        return todo.id === todoIdFromRoute;
      });
    });
  }

  ngOnDestroy(): void {
    this.todoObservable.unsubscribe();
  }
}
