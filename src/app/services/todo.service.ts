import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  editIndex: number = -1;
  editDescription: string = '';

  allItems: Item[] = [
    {
      description: 'Buy groceries',
      dueDate: this.addDays(new Date(), 1),
      priority: 1,
      status: 'Not started',
      id: '713c60b2-aaab-4b17-be12-e0da198d4318',
    },
    {
      description: 'Cook dinner',
      dueDate: this.addDays(new Date(), 2),
      priority: 2,
      status: 'In progress',
      id: uuid(),
    },
    {
      description: 'Wash the dishes',
      dueDate: this.addDays(new Date(), 2),
      priority: 3,
      status: 'Completed',
      id: uuid(),
    },
    {
      description: 'Do laundry',
      dueDate: this.addDays(new Date(), 2),
      priority: 1,
      status: 'Not started',
      id: uuid(),
    },
    {
      description: 'Walk the dog',
      dueDate: this.addDays(new Date(), 2),
      priority: 2,
      status: 'Completed',
      id: uuid(),
    },
    {
      description: 'Take out the trash',
      dueDate: this.addDays(new Date(), 2),
      priority: 1,
      status: 'Completed',
      id: uuid(),
    },
    {
      description: 'Mow the lawn',
      dueDate: this.addDays(new Date(), 10),
      priority: 3,
      status: 'Not started',
      id: uuid(),
    },
  ];

  // CRUD - Create, Read, Update, Delete
  addItem(description: string) {
    this.allItems.unshift({
      description,
      dueDate: this.addDays(new Date(), 7),
      priority: 1,
      status: 'Not started',
      id: uuid(),
    });
  }

  getItems() {
    return this.allItems;
  }

  startEdit(index: number) {
    this.editIndex = index;
  }

  finishEdit(description: string) {
    this.allItems[this.editIndex].description = description;
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
