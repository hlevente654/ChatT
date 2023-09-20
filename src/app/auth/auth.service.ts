import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, tap } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";



interface FirebaseResponseData{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}
@Injectable({
    providedIn: 'root',
})
export class AuthService{
    constructor(private http: HttpClient,private router: Router){}

    /*
    * Ebben a "csőben" van tárolva a jelenlegi felhasználó. 
    */
    user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
    

    private tokenExpirationTimer: any;
    authoLogOut(expirationDate: number){
        this.tokenExpirationTimer = setTimeout(() =>{
            this.logout();
        }, expirationDate);
    }

    autoLogin(){
        const userDataString = localStorage.getItem('userData');

        if (userDataString !== null) {
        const userData = JSON.parse(userDataString);
            const loadedUser = new User(userData.email, userData. id, userData._token, new Date(userData._tokenExpirationDate));
            if(loadedUser.token){
                this.user.next(loadedUser);
                const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
                this.authoLogOut(expirationDuration);
            }
        } else {
            return;
        }
    }
    
    private authenticationHandler(email: string,userId: string, token: string, expiresIn: number){
            const expirationDate = new Date(new Date(new Date().getTime() + expiresIn * 1000));
            const user = new User(email, userId, token, expirationDate);
            this.user.next(user);
            this.authoLogOut(expiresIn * 1000);
            localStorage.setItem('userData', JSON.stringify(user));
    }

    // Observable felkészítése regisztrációra
    register(email: string, password: string){
        return this.http.post<FirebaseResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7hRU1PgXGGkKBmleXj6w8xpl4H4N4a7s',
            {
                email: email,
                password: password,
                returnSecureToken: true

            }
        ).pipe(tap(response => {
            this.authenticationHandler(response.email, response.localId, response.idToken ,+response.expiresIn );
        }));
    }
    // Observable felkészítése bejelentkezésre
    login(email: string, password: string){
        return this.http.post<FirebaseResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7hRU1PgXGGkKBmleXj6w8xpl4H4N4a7s',
            {
                email: email,
                password: password,
                returnSecureToken: true

            }
        ).pipe(tap(response => {
            this.authenticationHandler(response.email, response.localId, response.idToken ,+response.expiresIn );
        }));
    }
    logout(){
        this.user.next(null);
        this.router.navigate(['/login-page']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }
    
}