import { Injectable , OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './ViewModels/User';
import { Login } from './ViewModels/Login';

@Injectable()
export class AppService implements OnInit {

    public blnDisplayMenu: boolean;

    constructor(private http:Http) {       
    }

    ngOnInit() {
        this.blnDisplayMenu = true;
    }

    login(user: User): Observable<Login> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/user/login', user, { headers: headers })
            .map(data => data.json());
         
    }

    isValidUser(): Observable<Login> {

        return this.http.get('/user/IsValidUser')
            .map((data) => data.json());
    }

    logOut(): Observable<Login> {
      return  this.http.get('/user/logout')
                       .map(data => data.json());
    }



}

