import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable()
export class LoggedGuard implements CanActivate {
    
  constructor(private router: Router, private authService: AuthServiceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.authService.isLogged()) {
        this.router.navigate(['/main']);
        return false;
    } else {
        return true;
    }
  }
}