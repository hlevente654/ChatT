import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from "./chat.component";

/*
* THe chat-lit and chatPage will be shown in path throu child routing
* /In progress/
*/
const routes: Routes = [{path: '', component: ChatComponent}]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class ChatRoutingModule{}