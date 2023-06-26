import { Component, ViewChild } from '@angular/core';
import { User } from '../../interfaces/user';
import { NgForm } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  @ViewChild('f') signupForm!: NgForm;
  userList: User[] = [];

  ngOnInit() {
    this.userList = [
      { id: '1', name: 'Daniel', age: '16' },
      { id: '2', name: 'Mike', age: '17' },
      { id: '3', name: 'Jason', age: '28' },
    ];
  }

  onSubmitted(form: NgForm) {
    console.log(form);
    this.register(form.form.value.name, form.form.value.age);
    this.signupForm.reset();
  }

  register(name: string, age: number) {
    this.userList.push({
      id: uuid(),
      name,
      age: age.toString(),
    });
  }

  onAutoFill() {
    this.signupForm.form.patchValue({
      name: 'Robyn',
      age: Math.floor(Math.random() * 50).toString(),
    });
  }
}
