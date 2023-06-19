import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  inEdit: boolean = false;
  editIndex: number = -1;

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
      dueDate: this.addDays(new Date(), 10),
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
  }

  getItems() {
    return this.allItems;
  }

  startEdit(index: number) {
    this.inEdit = true;
    this.editIndex = index;
  }

  finishEdit(description: string) {
    this.allItems[this.editIndex].description = description;
    this.inEdit = false;
    this.editIndex = -1;
  }

  deleteItem(index: number) {
    this.allItems.splice(index, 1);
  }

  // helper functions
  addDays(date: Date, days: number): Date {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
