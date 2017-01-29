import { Component, OnInit, AfterViewInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ProductService } from './product.service';
import { CategoryService } from '../category/category.service';

import { Category } from '../viewModels/Category';
import { Product } from '../ViewModels/Product';


@Component({
    moduleId:module.id,
    selector: '',
    templateUrl:'/product/all'

})


export class AllComponent implements OnInit {

    categories: Array<Category>;
    products: Array<Product>;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getCategories().subscribe({
            next: (data) => { this.categories = data },
            error: (err) => { }
        })
    }

    onCategoryChange(categoryID:string) {        

        if (categoryID != null && categoryID != '') {
            $.blockUI();
            this.productService.getProductsByCategoryID(categoryID).subscribe({
                next: (data) => {
                    this.products = data;
                    $.unblockUI();
                },
                error: (err) => {
                    $.unblockUI();
                }
            });
        }
        else {
            this.products = [];
        }

    }


}
