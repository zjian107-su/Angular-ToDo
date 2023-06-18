import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-ToDo';

  newDescription = '';

  allItems: Item[] = [
    { description: 'Buy groceries', done: false },
    { description: 'Cook dinner', done: false },
    { description: 'Wash the dishes', done: false },
    { description: 'Do laundry', done: false },
    { description: 'Walk the dog', done: false },
    { description: 'Take out the trash', done: false },
    { description: 'Mow the lawn', done: false },
  ];

  addItem(description: string) {
    this.allItems.unshift({ description, done: false });
    window.alert('It worked');
  }
}