import { NgModule } from "@angular/core";
import { ChatComponent } from "./chat.component";
import { ChatRoutingModule } from "./chat-routing.module";
import { ChatItemComponent } from "./chat-list/chat-item/chat-item.component";
import { CommonModule } from "@angular/common";
import { ChatListComponent } from "./chat-list/chat-list.component";
import { ChatPageComponent } from "./chatPage/chat-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ChatComponent,
        ChatItemComponent,
        ChatListComponent,
        ChatPageComponent
    ],
    imports:[
        ChatRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [

    ]
    
})
export class ChatModule{}