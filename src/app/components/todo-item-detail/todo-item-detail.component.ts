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
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  todos: Item[] = [];
  todo: Item | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const todoIdFromRoute = String(routeParams.get('id'));
    this.todos = this.todoService.getItems();

    this.todo = this.todos.find((todo) => {
      return todo.id === todoIdFromRoute;
    });

    console.log(typeof this.todo);
  }
}
