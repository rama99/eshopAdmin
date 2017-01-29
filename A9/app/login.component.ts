import { Component, OnInit, OnDestroy , ViewChild , ElementRef , Renderer , AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Login } from './ViewModels/Login';
import { User } from './ViewModels/User';
import { AppService } from './app.service';

@Component({
    moduleId:module.id,
    selector: '',
    templateUrl:'/user/login'

})

export class LoginComponent implements OnInit, OnDestroy , AfterViewInit {

    private formGroup: FormGroup;
    errorMessage: string;
    @ViewChild('userName') userName: ElementRef;

    constructor( private formBuilder: FormBuilder, private router: Router,
        private route: ActivatedRoute,
        private appService: AppService,
        private renderer: Renderer) { }

    ngOnInit() {

        this.appService.blnDisplayMenu = false;

        this.formGroup = this.formBuilder.group({
            "userName": ["", Validators.compose([Validators.required])],
            "password": ["", Validators.compose([Validators.required])],
            "grant_type": ["password"]
        });
    }

    onSignIn(user: User) {

        if (this.formGroup.invalid) {
            this.errorMessage = "Enter User Name and password";
        }
        else {

        $.blockUI();
        this.appService.login(user).subscribe({
            next: (data) => {

                if (data.authenticated == true) {
                    this.router.navigate(['home']);
                }
                else {
                    this.errorMessage = data.errorMessage;
                }
                $.unblockUI();
            },
            error: (err) => {
                alert('error');
                $.unblockUI();
            }
        });

    }

        
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
        this.appService.blnDisplayMenu = true;
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.userName.nativeElement, 'focus');
    }

}