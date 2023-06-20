import { Component } from '@angular/core';
import { Item } from './item';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  allItems: Item[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.allItems = this.todoService.allItems;
  }

  editIndex: number = this.todoService.editIndex;

  newDescription = '';
  editDescription = 'Apple';
  // CRUD - Create, Read, Update, Delete
  addItem(description: string) {
    this.todoService.addItem(description);
  }

  getItems() {
    return this.todoService.allItems;
  }

  startEdit(index: number) {
    this.todoService.startEdit(index);
    this.editIndex = this.todoService.editIndex;
  }

  finishEdit(newDescription: string) {
    this.todoService.finishEdit(newDescription);
    this.editIndex = this.todoService.editIndex;
  }

  deleteItem(index: number) {
    this.todoService.deleteItem(index);
  }
}