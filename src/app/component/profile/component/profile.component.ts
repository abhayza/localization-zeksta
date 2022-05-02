import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../auth/service/adminauth.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileForm!: FormGroup;
  loading = false; 
  profile: any;

  constructor( private router: Router,
    private authenticationService: AdminAuthService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private titleService:Title,
    ) {
    this.titleService.setTitle("Profile");
   
  }

  ngOnInit(): void {
    this.authenticationService.getProfile()
        .subscribe(
        res => {    
          if(res != undefined){ 
            this.profile = res.data;
            this.profileForm.patchValue(this.profile);
            this.toastr.success(res.message, 'Success');
          }else{ 
            this.profile = false;
            this.toastr.error("Project Not Found !", 'Error');
          }
        }, 
        error => {
            console.log(error);
        }
      );  
      this.profileForm = this.fb.group({
        _id:[''],
        firstname: ['', [Validators.required,]],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email,]],
        mobile_no: ['', [Validators.required,]], 
      });
  }

  public myError = (controlName: string, errorName: string) =>{ 
    return this.profileForm.controls[controlName].hasError(errorName);
}

updateProfile(val:any) {
  console.log(11111111, this.profile._id);
  
    if(this.profileForm.status == "VALID"){
    this.loading = true;   
    this.authenticationService.register(val.value)
        .subscribe(response => {
            var res = JSON.parse(JSON.stringify(response));
            if(res && res.error == false)
            {
                this.toastr.success("Your profile updated successfully", 'Success');
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
