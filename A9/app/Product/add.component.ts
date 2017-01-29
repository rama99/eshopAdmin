import { Component, OnInit, AfterViewInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ProductService } from './product.service';
import { CategoryService } from '../category/category.service';

import { Category } from '../viewModels/Category';

@Component({
    moduleId: module.id,
    selector: '',
    templateUrl: '/product/add'

})


export class AddComponent implements OnInit {

    private formGroup: FormGroup;
    private errorMessage: string;
    @ViewChild('name') name: ElementRef;
    private categories: Array<Category>;

    constructor(private formBuilder: FormBuilder,
        private title: Title,
        private renderer: Renderer,
        private productService: ProductService/*,
        private categoryService: CategoryService*/) { }

    ngOnInit() {

        this.formGroup = this.formBuilder.group({
            "name": ["", Validators.compose([Validators.required])],
            "category_id": ["", Validators.compose([Validators.required])],
            "description": ["", Validators.compose([Validators.required])],
            "price": ["", Validators.compose([Validators.required])],
            "imageUrl": ["", Validators.compose([Validators.required])],
            "title": ["title", Validators.compose([Validators.required])]
        });

        this.title.setTitle('Add Product');
        this.renderer.invokeElementMethod(this.name.nativeElement, 'focus');

        this.productService.getCategories().subscribe({
            next: (data) => {
                this.categories = data;
                $.unblockUI();
            },
            error: (err) => {
                $.unblockUI();
            }
        });

    }

    onAddProduct() {

        //this.formGroup.controls["title"].value("title");
        if (this.formGroup.invalid) {

            console.log(this.formGroup.value);
            this.errorMessage = "Enter all values";
        }
        else {

            $.blockUI();

            this.productService.addProduct(this.formGroup.value)
                .subscribe({
                    next: (data) => {

                        $.unblockUI();
                        this.formGroup.reset();
                        //this.toaster.success('Product Added.');

                    },
                    error: (err) => {
                        $.unblockUI();
                    }
                });
        }

    }


} 