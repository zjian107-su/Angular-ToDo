import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormControl } from '@angular/forms';
import { Item } from '../../interfaces/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent {
  todos: Observable<Item[]>;

  constructor(public todoService: TodoService) {
    this.todos = this.todoService.allItemsObs$;
  }

  reactiveItem: FormControl = new FormControl('');

  addItem() {
    this.todoService.addItem(this.reactiveItem.value);
    this.reactiveItem.reset();
  }
}
