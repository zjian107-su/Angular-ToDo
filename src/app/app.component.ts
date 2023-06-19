import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular-ToDo';
  inEdit: boolean = false;
  editIndex: number = -1;

  newDescription = '';
  editDescription = 'Apple';

  allItems: Item[] = [
    { description: 'Buy groceries', done: false },
    { description: 'Cook dinner', done: false },
    { description: 'Wash the dishes', done: false },
    { description: 'Do laundry', done: false },
    { description: 'Walk the dog', done: false },
    { description: 'Take out the trash', done: false },
    { description: 'Mow the lawn', done: false },
  ];

  // CRUD - Create, Read, Update, Delete
  addItem(description: string) {
    this.allItems.unshift({ description, done: false });
    window.alert('It worked');
  }

  getItems() {
    return this.allItems;
  }

  startEdit(index: number) {
    this.inEdit = true;
    this.editIndex = index;
  }

  editItem(newDescription: string) {
    this.allItems[this.editIndex].description = this.editDescription;
    this.inEdit = false;
    this.editIndex = -1;
  }

  deleteItem(index: number) {
    this.allItems.splice(index, 1);
  }
}