import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  constructor(public todoService: TodoService) {}

  allTodos: Item[] = this.todoService.getItems();
}
