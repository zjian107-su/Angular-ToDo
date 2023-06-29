import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  login(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.loggedIn = true;
        resolve();
        window.alert('You have been logged in.');
      }, 800);
    });
  }

  logout(): void {
    this.loggedIn = false;
  }
}
