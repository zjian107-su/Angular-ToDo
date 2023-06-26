import { Component } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  userList: User[] = [];

  ngOnInit() {
    this.userList = [
      { id: '1', name: 'Daniel' },
      { id: '2', name: 'Mike' },
      { id: '3', name: 'Jason' },
    ];
  }

  register(name: string) {
    this.userList.push({ id: (this.userList.length + 1).toString(), name });
    console.log('Form submitted!');
  }
}
