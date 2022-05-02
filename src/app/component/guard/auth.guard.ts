import { Injectable } from '@angular/core';
import { Router,CanActivate,RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminAuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate() { 
        if (localStorage.getItem('adminUserSession')) {
            return true;
        }else{
            // not logged in so redirect to login page
            this.router.navigate(['/login']);
            return false;
        }
       
    }
}

// @Injectable({ providedIn: 'root' })
// export class PermissionGuard implements CanActivate {
//     constructor(private router: Router) { }
//     canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {

//      const perm = localStorage.getItem('permissions');
//      if (perm.indexOf(route.data.key) > -1) {
//         return true; 
//       } else {
//         this.router.navigate(['/']);
//         return false;
//      } 
//     }
// }