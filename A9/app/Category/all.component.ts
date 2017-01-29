import { Component , OnInit } from '@angular/core';

import { Category } from '../ViewModels/Category';
import { CategoryService } from './category.service';


@Component({
    moduleId:module.id,
    selector: '',
    //templateUrl:''
    templateUrl:'/category/all'

})


export class AllComponent implements OnInit {

    categories: Array<Category>;
    details: Category;
    constructor(private categoryService: CategoryService) { }

    ngOnInit() {

        $.blockUI();

        this.categoryService.GetCategories().subscribe({
            next: (data) => {
                this.categories = data;
                $.unblockUI();
            },
            error: (err) => {
                $.unblockUI();
            }
        })
    }

    categoryDetails(category: Category) {
        this.details = category;
    }



}
