import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent {
  constructor(public todoService: TodoService) {}
  editIndex: number = this.todoService.editIndex;
  newDescription = '';

  addItem(description: string) {
    this.todoService.addItem(description);
  }
}
