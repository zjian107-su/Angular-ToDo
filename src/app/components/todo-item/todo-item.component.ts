import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../interfaces/item';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  // get item from parent component
  @Input() item: Item = {
    description: '',
    dueDate: new Date(),
    priority: 1,
    status: 'Not started',
  };
  @Input() index: number = -1;

  constructor(public todoService: TodoService) {}

  deleteItem(): void {
    this.todoService.deleteItem(this.index);
  }

  startEdit(): void {
    this.todoService.startEdit(this.index);
  }

  finishEdit(newDescritpion: string): void {
    this.todoService.finishEdit(newDescritpion);
  }
}
