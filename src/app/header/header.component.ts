import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    
    constructor(private authService: AuthService){}
    
    public isLogedIn: boolean = false;
    private userSub: any;
    @ViewChild('dropdownContent') dropdownContent!: ElementRef;

    searchTerm: string = '';
    searchResults: string[] = [];

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe(user =>{
            this.isLogedIn = !user ? false: true;
        });
    }
    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
    onLogOut(){
        this.authService.logout();
    }

    calculateHeight(): number {
        // Adj hozzá egy minimális magasságot, hogy mindig legyen egy kis hely a találatoknak
        const minHeight = 30; // Például 30 pixel
        // A találatok számától függően számoljuk ki a magasságot
        return minHeight + this.searchResults.length * 20; // Például 20 pixel magasságú minden találat
      }

    onSearch() {
        // Itt kellene lekérni a találatokat a valós alkalmazásban,
        // de most csak használjuk a mintaadatokat.
        const sampleData = [
          'Első találat',
          'Második találat',
          'Harmadik találat',
          'Negyedik találat',
          'Ötödik találat',
        ];
        const dropDownElement = this.dropdownContent.nativeElement;
        if(this.searchTerm.length <= 0){
            dropDownElement.style.display = 'none';
        } else {
            dropDownElement.style.display = 'block';
        }
        this.searchResults = sampleData.filter(item => item.toLowerCase().includes(this.searchTerm.toLowerCase()));

    }

    
}