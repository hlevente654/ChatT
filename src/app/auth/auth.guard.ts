import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { map } from 'rxjs';

@Injectable({
    providedIn:'root'
})
class AuthGuard{
    constructor(private authService: AuthService){}
    canActivateLogedIn(
        route:ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean{
            if(this.authService.user.pipe(map(user => {
                if(user != null){
                    return true
                } else{
                    return false;
                }
            }))){
                return true;
            } else{
                return false;
            }
        }

        canActivateNotLogedIn(
            route:ActivatedRouteSnapshot,
            state: RouterStateSnapshot): boolean{
                if(this.authService.user.pipe(map(user => {
                    if(user == null){
                        return true
                    } else{
                        return false;
                    }
                }))){
                    return true;
                } else{
                    return false;
                }
            }
}
export const IsNotLogedInGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(AuthGuard).canActivateNotLogedIn(route, state);
}

    export const IsLogedInGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
        return inject(AuthGuard).canActivateLogedIn(route, state);
    }
