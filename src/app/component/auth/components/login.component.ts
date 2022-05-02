import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminAuthService } from '../service/adminauth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from "@angular/platform-browser";

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
    selector: 'login',
    templateUrl: '../templates/login.component.html',
    styleUrls: ['../css/login.component.scss']
})
export class LoginComponent implements OnInit {
    public newUser = false;
    public loginForm: FormGroup; 
    model: any = {};
    loading = false;
    title = 'Login'; 
    
    constructor(
        private router: Router,
        private authenticationService: AdminAuthService,
        private toastr: ToastrService,
        private fb: FormBuilder,
        private titleService:Title,
        ) {
        this.titleService.setTitle("Add Project");
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
        this.model.useremail = localStorage.getItem('adminRememberEmail');
        this.model.rememberme = localStorage.getItem('adminRememberMe');
    }
    ngOnInit() {
        if (localStorage.getItem('adminUserSession')) {
            this.router.navigate(['/']);
        }
    }

    public myError = (controlName: string, errorName: string) =>{ 
        return this.loginForm.controls[controlName].hasError(errorName);
    }

    login(val: any) { 
        this.loading = true;   
        const email = val.value.email;
        const password = val.value.password
        if(this.loginForm.status == "VALID"){
        this.authenticationService.login(email, password, this.model.rememberme)
            .subscribe(response => {
                var res = JSON.parse(JSON.stringify(response));
                if(res.newToken && res.error == false)
                {
                    this.toastr.success("You are being redirected", 'Success');
                    this.router.navigate(['']);
                }
                else {
                    this.toastr.error(res.message, 'Error');
                    this.loading = false;
                }
            });
        }
    }
}
