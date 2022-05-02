import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../project/service/project.service'; 
import { ToastrService } from 'ngx-toastr';  
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: any;

  constructor(
    private router: Router, 
    private projectService: ProjectService,
    private toastr: ToastrService, 
    private titleService:Title,
    ) {
      this.titleService.setTitle("Dashboard");
     }

  ngOnInit(): void {
    this.projectService.getProjects()
        .subscribe(
        res => {   
          if(res != undefined){ 
            this.projects = res.data;
            this.toastr.success(res.message, 'Success');
          }else{ 
            this.projects = false;
            this.toastr.error("Project Not Found !", 'Error');
          }
        }, 
        error => {
            console.log(error);
        }
      );  
  }

  logout() {
  	if(confirm('Are you sure you want to end the session?')){
  		this.router.navigate(['/logout']);
  	}
  }
  
  deleteProject(val:number){ 
    var allprojects = <any>[];
    if(confirm('Are you sure you want to delete project?')){
      this.projectService.deleteProject(val)
      .subscribe(
      res => { 
          this.router.navigate(['/']);
          this.toastr.success("Project Deleted Successfully !", 'Success');
          allprojects = this.projects
          this.projects=allprojects.filter((h: { _id: number; })=> h._id !== val);
      }, 
      error => {
          console.log(error);
      }
      );
  	} 
  }
}
