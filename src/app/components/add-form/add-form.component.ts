import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent {
  constructor(public todoService: TodoService) {}

  reactiveItem: FormControl = new FormControl('');
  todos = this.todoService.getItems();

  addItem() {
    this.todoService.addItem(this.reactiveItem.value);
  }
}
