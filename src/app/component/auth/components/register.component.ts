import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminAuthService } from '../service/adminauth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from "@angular/platform-browser";

type UserFields = 'firstname' | 'lastname' | 'email' | 'mobile_no' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
    selector: 'register',
    templateUrl: '../templates/register.component.html',
    styleUrls: ['../css/login.component.scss']
})
export class RegisterComponent implements OnInit {
    public registerForm!: FormGroup; 
    model: any = {};
    loading = false;
    title = 'Register';
    
    constructor(
        private router: Router,
        private authenticationService: AdminAuthService,
        private toastr: ToastrService,
        private fb: FormBuilder,
        private titleService:Title,
        ) {
        this.titleService.setTitle("Register");
        this.model.useremail = localStorage.getItem('adminRememberEmail');
        this.model.rememberme = localStorage.getItem('adminRememberMe');
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            firstname: ['', [Validators.required,]],
            lastname: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            mobile_no: ['', [Validators.required,]],
            password: ['', Validators.required],
        });
        this.model.useremail = localStorage.getItem('adminRememberEmail');
        this.model.rememberme = localStorage.getItem('adminRememberMe');
        if (localStorage.getItem('adminUserSession')) {
            this.router.navigate(['/']);
        }
    }

    public myError = (controlName: string, errorName: string) =>{ 
        return this.registerForm.controls[controlName].hasError(errorName);
    }

    register(val:any) {
        if(this.registerForm.status == "VALID"){
        this.loading = true;   
        this.authenticationService.register(val.value)
            .subscribe(response => {
                var res = JSON.parse(JSON.stringify(response));
                if(res && res.error == false)
                {
                    this.toastr.success("You are Registered Please Log In", 'Success');
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
