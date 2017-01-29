import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http , Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Category } from '../ViewModels/Category';

@Injectable()
export class CategoryService implements OnInit {

    constructor(private http: Http) { }

    ngOnInit() {

    }

    GetCategories(): Observable<Array<Category>> {
        return this.http.get('/category/getcategories')
                        .map(data => data.json());            
    }

    addCategory(category: Category) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //headers.append('Authorization', "Bearer " + this.userService.getOAuthToken());

        return this.http.post('/category/addcategory', JSON.stringify(category), { headers: headers })
            .map(data => data.json());

    } 

}