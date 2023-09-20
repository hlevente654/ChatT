import { Component } from "@angular/core"; 
import {  NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { DataStorageService } from "../../shared/services/data-storage.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
})
export class RegisterComponent {

    constructor(private authService: AuthService, private router: Router,private dataStorageService: DataStorageService){}

    //Signing up new user
    //kell még ide:
        /* -validator */
    onRegisterSubmit(form: NgForm){
        console.log('onSubmit');
        //console.log(this.regForm.value);
        const email = form.value.email;
        const password = form.value.password;
        const name = form.value.userName;
        console.log(email + " "+ password);
        this.authService.register(email, password).subscribe({
            next: (resData) => {
                console.log("Regisztráció sikeres");

                this.dataStorageService.storeNewUser({ email, name }).subscribe({
                    next: (storeResult) => {
                      if (storeResult) {
                        this.router.navigate(['/user-Page']);
                      }
                    },
                    error: (storeError) => {
                      console.log(storeError);
                    }
                  });
            },
            error: (error) =>{
                console.log(error);
            }
        });

    }
}