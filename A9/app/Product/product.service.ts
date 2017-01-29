import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from '../ViewModels/Product';
import { Category } from '../ViewModels/Category';


@Injectable()
export class ProductService {

    constructor(private http: Http) { }

    getCategories(): Observable<Array<Category>> {
        return this.http.get('/category/getcategories')
            .map(data => data.json());
    }
    

    getProductsByCategoryID(id: string): Observable<Array<Product>> {

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        //headers.append('Authorization', "Bearer " + this.userService.getOAuthToken());s
        let options = new RequestOptions({ headers: headers });

        return this.http.get('/product/GetProductsByCategoryID/' + id , { headers: headers })
            .map(data => data.json());

    }

    addProduct(product: Product) {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //headers.append('Authorization', "Bearer " + this.userService.getOAuthToken());

        return this.http.post('product/AddProduct', JSON.stringify(product), { headers: headers })
            .map(data => data.json());

    }




}