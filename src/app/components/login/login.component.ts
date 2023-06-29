import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public authService: AuthService, private router: Router) {}
  title = 'Login';

  login(): void {
    this.authService.login().then(() => {
      this.router.navigate(['/']);
    });
  }
}
