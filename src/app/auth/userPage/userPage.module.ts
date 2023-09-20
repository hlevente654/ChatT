import { NgModule } from "@angular/core";
import { UserPageComponent } from "./userPage.component";
import { UserPageRouting } from "./userPage-routing.component";

@NgModule({
    declarations: [
        UserPageComponent
    ],
    imports: [
        UserPageRouting
    ]
})
export class UserPageModule{
}