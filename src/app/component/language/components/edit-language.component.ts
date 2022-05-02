import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LanguageService } from '../service/language.service'; 
import { ToastrService } from 'ngx-toastr';
import { Title } from "@angular/platform-browser";
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component ({
  selector: 'edit-language',
  templateUrl: '../templates/edit-language.component.html',
  styleUrls: ['../css/language.component.scss']
})

export class EditLanguageComponent implements OnInit{
  language: any;
  public languageForm!: FormGroup;
  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private languageService : LanguageService,
    private toastr: ToastrService,
    private titleService:Title,
    private fb: FormBuilder,
    ){ 
      this.titleService.setTitle("Edit Language"); 
      this.languageForm = this.fb.group({
        language_name: ['', [Validators.required, Validators.maxLength(20)]],
        language_description: ['', Validators.required],
      });
    }
    
 
  ngOnInit(){  
    const languageId = this.route.snapshot.paramMap.get('id')
    this.languageService.getLanguage(languageId).subscribe(res=>{ 
      if(res){ 
        this.language = res.data;  
      }
      this.languageForm.patchValue(this.language); 
    }) 
  }

  public myError = (controlName: string, errorName: string) =>{ 
    return this.languageForm.controls[controlName].hasError(errorName);
  }
 
  updateLanguage(val:any){  
    if(this.languageForm.status == "VALID"){
      const languageId = this.route.snapshot.paramMap.get('id')
      const value = [];
      value.push({
        "id": languageId,
        "language_name": val.value.language_name,
        "language_description": val.value.language_description
      })

      this.languageService.saveLanguage(value[0])
        .subscribe(
        res => { 
            this.router.navigate(['/']);
            this.toastr.success("Language Update Successfully !", 'Success');
        }, 
        error => {
            console.log(error);
        }
      ); 
    } 
  }
}
