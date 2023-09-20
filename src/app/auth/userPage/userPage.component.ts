import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "src/app/shared/services/data-storage.service";

@Component({
    selector: 'app-userPage',
    templateUrl: './userPage.component.html',
})
export class UserPageComponent implements OnInit{
    constructor(private dataStorageService: DataStorageService){}

    public userName: string | undefined = "userName";
    public userEmail: string | undefined = "userEmail";

    ngOnInit(): void {
        this.dataStorageService.fetchUserData().subscribe({
            next: (user) => {
            console.log(user)
            this.userName = user?.name;
            this.userEmail = user?.email;
        }});
    }
}