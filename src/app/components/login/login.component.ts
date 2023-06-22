import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  title = 'Login';

  login(): void {
    this.authService.login();
    window.alert('You have been logged in.');
  }
}
