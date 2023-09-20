import { NgModel } from "@angular/forms";
import { NgModule } from '@angular/core';
import { LoginPageComponent } from "./login.component";
import { LoginPageRoutingModule } from "./login-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [
        LoginPageRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class LoginPageModule{}