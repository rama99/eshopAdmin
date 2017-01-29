import { Component , OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-app',  
    templateUrl: 'app/app.component.html'
 })
export class AppComponent
{
    blnDisplayMenu: boolean;
    constructor(private appService: AppService , private router:Router , private route: ActivatedRoute) { }

    ngOnInit() {
        this.appService.blnDisplayMenu = true;
    }

    ngDoCheck() {
        //this.url$.subscribe(data => console.log('HERE   ' + data));
        this.blnDisplayMenu = this.appService.blnDisplayMenu;

    }

    logOut() {
        this.appService.logOut().subscribe({
            next: (data) => {
                this.router.navigate(['']);
            }
        })
    }

}
