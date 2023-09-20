import { NgModule } from "@angular/core";
import { UserPageComponent } from "./userPage.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{
    path:'',
    component: UserPageComponent
}]

@NgModule({
    declarations:[],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserPageRouting{

}