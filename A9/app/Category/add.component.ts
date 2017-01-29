import { Component, OnInit, ViewChild, Renderer, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName , Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { Category } from '../ViewModels/Category';
import { CategoryService } from './category.service';

@Component({
    moduleId:module.id,
    selector: '',
    templateUrl:'/category/add'
})


export class AddComponent implements OnInit  , AfterViewInit  {

    private fg: FormGroup;
    private errorMessage: string;

    @ViewChild('name') name: ElementRef;

    constructor( private formBuilder: FormBuilder,
        private service: CategoryService,
        private title: Title,
        private renderer: Renderer,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {

        this.fg = this.formBuilder.group({
            "name": ["", Validators.compose([Validators.required])],
            "description": ["", Validators.compose([Validators.required])],
            "image_url": ["", Validators.compose([Validators.required])]
        });

        this.title.setTitle('Add Category');  
        
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.name.nativeElement, 'focus');
    }

    onAdd() {

        if (this.fg.invalid) {
            this.errorMessage = 'Enter values for all fields';
        }
        else {

            $.blockUI();
            this.service.addCategory(this.fg.value)
                .subscribe({
                    next: (data) => {
                        $.unblockUI();
                        this.router.navigate(['/categories/']);
                    },
                    error: (err) => { $.unblockUI();
                    }
                });
        }
    }



}