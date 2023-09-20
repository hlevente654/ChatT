import { Component } from "@angular/core";
import { ChatGroup, Message } from "../chat.service";


@Component({
    selector:'app-chat-list',
    templateUrl:'./chat-list.component.html'
})
export class ChatListComponent{
    chatGroups: ChatGroup[] = [new ChatGroup("TesztGroup 1", [new Message(1, "Levi", "üzenet")], "Levi"),
                               new ChatGroup("Teszt group 2", [new Message(2, "Jani", "vissza üzenet")], "Levi"),
                                new ChatGroup("Teszt group 3", [new Message(3, "Levi", "Vissza vissza üzenet")], "Levi")];
}