import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../service/language.service';   
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from "@angular/platform-browser";

@Component ({
  selector: 'add-language',
  templateUrl: '../templates/add-language.component.html',
  styleUrls: ['../css/language.component.scss']
})

export class AddLanguageComponent implements OnInit{

    public languageForm!: FormGroup; 
    constructor(
      private router: Router,
      private languageService: LanguageService,
      private toastr: ToastrService,
      private titleService:Title,
      private fb: FormBuilder, 
    ) {
      this.titleService.setTitle("Add Language");
    }  

    ngOnInit(){ 
      this.languageForm = this.fb.group({
        language_name: ['', [Validators.required, Validators.maxLength(20)]],
        language_description: ['', Validators.required],
      });
    }
    public myError = (controlName: string, errorName: string) =>{ 
      return this.languageForm.controls[controlName].hasError(errorName);
    }
    
    addLanguage(val:any){ 
      if(this.languageForm.status == "VALID"){
        this.languageService.saveLanguage(val.value)
        .subscribe(
        res => { 
          this.router.navigate(['/']);
          this.toastr.success("Language Created Successfully !", 'Success');
        }, 
          error => {
            console.log(error);
          }
        );
      } 
    } 
}
