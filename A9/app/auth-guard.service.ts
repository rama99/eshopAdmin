import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot  , Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Login } from './ViewModels/Login';
import { AppService } from './app.service';

@Injectable()
export class AuthGuard implements CanActivate, OnInit {

    constructor(private http: Http, private router:Router , private appService: AppService) {

    }

    ngOnInit() {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this.appService.isValidUser()
            .map((data) => {
                if (data.authenticated == true) {
                    return true;
                }

                this.router.navigateByUrl('/login');
                return false;
            })
            .catch(_ => { this.router.navigateByUrl('/login'); return Observable.of(false); });

    }

    }