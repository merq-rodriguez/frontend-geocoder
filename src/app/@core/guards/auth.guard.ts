
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
    
@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    user: any;
    constructor(
        private readonly authService: AuthService,
        private readonly router: Router
    ) { }
    canActivate() {
        this.authService.userObservable$.subscribe(user => this.user = user);
        if(this.user){
            
            return true;

        }else{
            this.router.navigate(['/home/signin'])
            return false;
        }
    }
}
