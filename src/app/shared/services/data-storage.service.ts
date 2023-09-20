
import { HttpClient, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { exhaustMap, switchMap, take, of, Observable, map  } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

interface User{
    email: string,
    name: string
}
@Injectable({
    providedIn: 'root'
})
/*
*   Adatbázissal való kommunikálás itt történik
*/

/*
* 
*/
export class DataStorageService{
    constructor(private http: HttpClient, private authService: AuthService){}

    fetchUserData() {
        return this.authService.user.pipe(
            take(1),
            switchMap(user => {
              if (user?.token) {
                const emailKey = user.email.replace(/[.#$/[\]]/g, '_');
                return this.http.get<User>('https://chattbase-77025-default-rtdb.europe-west1.firebasedatabase.app/usersData/' + encodeURIComponent(emailKey) + '.json',
                  {
                    params: new HttpParams().set('auth', user.token)
                  });
              } else {
                return of(null);
              }
            })
          );
      }
    
    /*
    * A felhasználó bejelentkezésen kívüli adatainak lementése.
    * post / put lekezelése
    */
    storeNewUser(userData: User): Observable<any>{
        //Csak egy dolgot akarok a feliratkzásból
        /*
        this.authService.user.pipe(take(1), exhaustMap(user =>{

        }));
        */
        const emailKey = userData.email.replace(/[.#$/[\]]/g, '_'); // Kulcs generálása az emailből
        return this.http.put<User>('https://chattbase-77025-default-rtdb.europe-west1.firebasedatabase.app/usersData/'+encodeURIComponent(emailKey)+'.json', userData).pipe(
            map(response => {
                console.log("storeNewUser: "+response);
                return response;
            })
        );
    }
}