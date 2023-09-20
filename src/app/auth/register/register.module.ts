import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register.component";
import { RegisterRoutingModule } from "./register-routing.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        RegisterRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class RegisterPageModule{}