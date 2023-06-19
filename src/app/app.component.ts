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
    {
      description: 'Buy groceries',
      dueDate: this.addDays(new Date(), 1),
      priority: 1,
      status: 'Not started',
    },
    {
      description: 'Cook dinner',
      dueDate: this.addDays(new Date(), 2),
      priority: 2,
      status: 'In progress',
    },
    {
      description: 'Wash the dishes',
      dueDate: this.addDays(new Date(), 2),
      priority: 3,
      status: 'Completed',
    },
    {
      description: 'Do laundry',
      dueDate: this.addDays(new Date(), 2),
      priority: 1,
      status: 'Not started',
    },
    {
      description: 'Walk the dog',
      dueDate: this.addDays(new Date(), 2),
      priority: 2,
      status: 'Completed',
    },
    {
      description: 'Take out the trash',
      dueDate: this.addDays(new Date(), 2),
      priority: 1,
      status: 'Completed',
    },
    {
      description: 'Mow the lawn',
      dueDate: this.addDays(new Date(), 2),
      priority: 3,
      status: 'Not started',
    },
  ];

  // CRUD - Create, Read, Update, Delete
  addItem(description: string) {
    this.allItems.unshift({
      description,
      dueDate: this.addDays(new Date(), 7),
      priority: 1,
      status: 'Not started',
    });
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

  // helper function
  addDays(date: Date, days: number): Date {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}