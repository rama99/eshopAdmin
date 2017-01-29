import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component'; 
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { LogoutComponent } from './logout.component';

import { CategoryModule } from './Category/category.module';
import { ProductModule } from './Product/product.module';

import { AppService } from './app.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule , RouterModule.forRoot([
        { path: '', component: LoginComponent },
        { path: 'login', component: LoginComponent },
        { path: 'home',  canActivate: [AuthGuard], component: HomeComponent },
        { path: 'about', canActivate:[AuthGuard] , component: AboutComponent },
        { path: 'logout', component: LogoutComponent }
    ]), CategoryModule, ProductModule, HttpModule],
    exports:[],
    declarations: [AppComponent, LoginComponent, AboutComponent, HomeComponent, LogoutComponent],
    providers: [AppService, AuthGuard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
