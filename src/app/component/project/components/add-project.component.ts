import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../service/project.service';   
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from "@angular/platform-browser";

@Component ({
  selector: 'add-project',
  templateUrl: '../templates/add-project.component.html',
  styleUrls: ['../css/project.component.scss']
})

export class AddProjectComponent implements OnInit{

    public projectForm!: FormGroup; 
    constructor(
      private router: Router,
      private projectService: ProjectService,
      private toastr: ToastrService,
      private titleService:Title,
      private fb: FormBuilder, 
    ) {
      this.titleService.setTitle("Add Project");
    }  

    ngOnInit(){ 
      this.projectForm = this.fb.group({
        project_name: ['', [Validators.required, Validators.maxLength(20)]],
        project_description: ['', Validators.required],
      });
    }
    public myError = (controlName: string, errorName: string) =>{ 
      return this.projectForm.controls[controlName].hasError(errorName);
    }
    
    addProject(val:any){ 
      if(this.projectForm.status == "VALID"){
        this.projectService.saveProject(val.value)
        .subscribe(
        res => { 
          this.router.navigate(['/']);
          this.toastr.success("Project Created Successfully !", 'Success');
        }, 
          error => {
            console.log(error);
          }
        );
      } 
    } 
}
