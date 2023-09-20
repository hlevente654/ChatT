import { Component, Input } from "@angular/core";
import { ChatGroup } from "../../chat.service";


@Component({
    selector:'app-chat-item',
    templateUrl:'./chat-item.component.html'
})
export class ChatItemComponent{
    @Input('chatGroupEl') chat: ChatGroup | null = null;
    constructor(){}
}