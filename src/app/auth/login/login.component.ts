import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
/*
* Login page component
* /In progress/:
*    Show louder
*   Error handlers
*/
export class LoginPageComponent {

    constructor(private authService: AuthService, private router: Router){}

    onSigningInSubmit(form: NgForm){
        this.authService.login(form.value.email as string, form.value.password as string).subscribe({
            next: (data) => {
                console.log("Bejelentkeztél");
                console.log(data);
                this.router.navigate(['/user-Page']);
            },

            error: (error) => {
                console.log("Bejelentkezési hiba történt: "+ error);
            }
        })
    }
}