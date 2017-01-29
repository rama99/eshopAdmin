import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CategoryModule } from '../Category/category.module';

import { ProductsComponent } from './products.component';
import { AddComponent } from './add.component';
import { AllComponent } from './all.component';

import { ProductService } from './product.service';
import { CategoryService } from '../Category/category.service';

@NgModule({
    imports: [  CommonModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forChild([
        {
            path: 'products', component: ProductsComponent, children: [
                { path: '', component: AllComponent },
                { path: 'add', component: AddComponent }
            ]
        }
    ])],
    exports: [],
    declarations: [ProductsComponent, AddComponent , AllComponent],
    providers: [ProductService, CategoryService]

})


export class ProductModule {

}
