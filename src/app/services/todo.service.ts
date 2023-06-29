import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import { v4 as uuid } from 'uuid';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private allItemsSubj$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(
    []
  );
  allItemsObs$: Observable<Item[]> = this.allItemsSubj$.asObservable();
  allTodo: Item[] = [
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

  editIndex: number = -1;
  editDescription: string = '';

  constructor() {
    this.allItemsSubj$.next(this.allTodo);
  }

  // CRUD - Create, Read, Update, Delete
  addItem(description: string): void {
    const newItem: Item = {
      description,
      dueDate: this.addDays(new Date(), 7),
      priority: 1,
      status: 'Not started',
      id: uuid(),
    };
    this.allItemsSubj$.next([newItem, ...this.allItemsSubj$.getValue()]);
    console.log(
      'Current allItemsSubj$ has ' +
        JSON.stringify(this.allItemsSubj$.getValue())
    ); // log
  }

  startEdit(index: number) {
    console.log('startEdit() called');
    this.editIndex = index;
  }

  finishEdit(description: string): void {
    console.log('finishEdit() called');
    const updatedItems = [...this.allItemsSubj$.getValue()];
    updatedItems[this.editIndex].description = description;
    this.allItemsSubj$.next(updatedItems);
    this.editIndex = -1;
    console.log(
      'Current allItemsSubj$ has ' +
        JSON.stringify(this.allItemsSubj$.getValue())
    );
  }

  deleteItem(index: number) {
    console.log('deleteItem() called');
    const updatedItems = [...this.allItemsSubj$.getValue()];
    updatedItems.splice(index, 1);
    this.allItemsSubj$.next(updatedItems);
    console.log(
      'Current allItemsSubj$ has ' +
        JSON.stringify(this.allItemsSubj$.getValue())
    );
  }

  // helper functions
  addDays(date: Date, days: number): Date {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

}
