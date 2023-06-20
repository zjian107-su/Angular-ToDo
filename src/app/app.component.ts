import { Component } from '@angular/core';
import { Item } from './item';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public todoService: TodoService) {}

  ngOnInit() {}

  editIndex: number = this.todoService.editIndex;

  newDescription = '';

  addItem(description: string) {
    this.todoService.addItem(description);
  }
}