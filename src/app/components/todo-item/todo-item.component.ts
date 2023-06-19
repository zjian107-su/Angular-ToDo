import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../item';

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
  @Output() deleteItemEvent = new EventEmitter<number>();
  @Output() startEditEvent = new EventEmitter<number>();
  @Output() finishEditEvent = new EventEmitter<string>();

  constructor() {}

  inEdit: boolean = false;
  editDescription: string = '';

  deleteItem(): void {
    this.deleteItemEvent.emit(this.index);
  }

  startEdit(): void {
    this.startEditEvent.emit(this.index);
    this.inEdit = true;
  }

  finishEdit(newDescritpion: string | undefined): void {
    this.finishEditEvent.emit(newDescritpion);
    this.inEdit = false;
  }
}
