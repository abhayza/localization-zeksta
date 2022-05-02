import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProjectService } from '../service/project.service'; 
import { ToastrService } from 'ngx-toastr';
import { Title } from "@angular/platform-browser";
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component ({
  selector: 'edit-project',
  templateUrl: '../templates/edit-project.component.html',
  styleUrls: ['../css/project.component.scss']
})

export class EditProjectComponent implements OnInit{
  project: any;
  public projectForm!: FormGroup;
  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private projectService : ProjectService,
    private toastr: ToastrService,
    private titleService:Title,
    private fb: FormBuilder,
    ){ 
      this.titleService.setTitle("Edit Project"); 
      this.projectForm = this.fb.group({
        project_name: ['', [Validators.required, Validators.maxLength(20)]],
        project_description: ['', Validators.required],
      });
    }
    
 
  ngOnInit(){  
    const projectId = this.route.snapshot.paramMap.get('id')
    this.projectService.getProject(projectId).subscribe(res=>{ 
      if(res){ 
        this.project = res.data;  
      }
      this.projectForm.patchValue(this.project); 
    }) 
  }

  public myError = (controlName: string, errorName: string) =>{ 
    return this.projectForm.controls[controlName].hasError(errorName);
  }
 
  updateProject(val:any){  
    if(this.projectForm.status == "VALID"){
      const projectId = this.route.snapshot.paramMap.get('id')
      const value = [];
      value.push({
        "id": projectId,
        "project_name": val.value.project_name,
        "project_description": val.value.project_description
      })

      this.projectService.saveProject(value[0])
        .subscribe(
        res => { 
            this.router.navigate(['/']);
            this.toastr.success("Project Update Successfully !", 'Success');
        }, 
        error => {
            console.log(error);
        }
      ); 
    } 
  }
}
