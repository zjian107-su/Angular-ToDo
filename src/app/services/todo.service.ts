import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import { v4 as uuid } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface DeleteResponse {
  status: string;
  message: string;
  todos: Item[];
}

const devMode = false;
const HOST = devMode
  ? 'http://localhost:3000'
  : 'https://daniel-node-todo-backend-08ae76268480.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private allItemsSubj$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(
    []
  );
  allItemsObs$: Observable<Item[]> = this.allItemsSubj$.asObservable();

  editIndex: number = -1;
  editDescription: string = '';

  constructor(private http: HttpClient) {
    this.http.get<Item[]>(`${HOST}/`).subscribe({
      next: (data) => {
        data.forEach((item) => {
          if (item.dueDate) {
            item.dueDate = new Date(item.dueDate);
          }
        });
        this.allItemsSubj$.next(data);
      },
      error: (error) => {
        console.log('Error getting data from server: ' + error);
      },
      complete: () => {
        console.log('Finished getting data from server');
      },
    });
  }

  // CRUD - Create, Read, Update, Delete
  addItem(description: string): void {
    const newDescription = description.trim();

    this.http
      .post<Item>(`${HOST}/`, { description: newDescription })
      .subscribe({
        next: (data) => {
          if (data.dueDate) {
            data.dueDate = new Date(data.dueDate);
          }

          this.allItemsSubj$.next([data, ...this.allItemsSubj$.getValue()]);
        },
        error: (error) => {
          console.log('Error adding item to server: ' + error);
        },
      });
  }

  startEdit(index: number) {
    console.log('startEdit() called');
    this.editIndex = index;
  }

  finishEdit(description: string): void {
    console.log('finishEdit() called');

    const updatedItems = [...this.allItemsSubj$.getValue()];
    let item = updatedItems[this.editIndex];
    item.description = description;

    this.http
      .patch<Item[]>(`${HOST}/${item.id}`, { description: description })
      .subscribe({
        next: (data) => {
          data.forEach((item) => {
            if (item.dueDate) {
              item.dueDate = new Date(item.dueDate);
            }
          });
          this.allItemsSubj$.next(data);
          this.editIndex = -1;
        },
        error: (error) => {
          console.log('Error updating item on server: ' + error);
        },
      });
  }

  deleteItem(id: string) {
    console.log('deleteItem() called');
    this.http.delete<DeleteResponse>(`${HOST}/${id}`).subscribe({
      next: (data) => {
        data.todos.forEach((item) => {
          if (item.dueDate) {
            item.dueDate = new Date(item.dueDate);
          }
        });
        this.allItemsSubj$.next(data.todos);
      },
      error: (error) => {
        console.log('Error deleting item on server: ' + error);
      },
    });
  }
}
