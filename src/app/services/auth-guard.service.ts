import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean | any {
    this.authService.isAuthenticated().then((authenticated: boolean) => {
      if (authenticated) {
        console.log(
          'Authenticated confirmed in auth-guard.service.ts, and guard passed.'
        );
        return true;
      } else {
        console.log(
          'Authenticated not confirmed in auth-guard.service.ts, and guard failed.'
        );
        this.router.navigate(['/']);
        return false;
      }
    });
  }
}
