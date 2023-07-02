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
    id: '',
  };
  @Input() index: number = -1;

  description: string = '';

  constructor(public todoService: TodoService) {}

  deleteItem(): void {
    this.todoService.deleteItem(this.item.id);
  }

  startEdit(): void {
    this.todoService.startEdit(this.index);
    this.description = this.item.description;
  }

  finishEdit(newDescription: string): void {
    let finalDescription = newDescription.trim();
    if (newDescription === '') {
      finalDescription = this.description;
    }
    this.todoService.finishEdit(finalDescription);
  }
}
