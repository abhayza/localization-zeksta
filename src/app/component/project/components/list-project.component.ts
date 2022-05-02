import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../service/project.service'; 
import { ToastrService } from 'ngx-toastr';
import {Title} from "@angular/platform-browser";

declare var $: any;

@Component({
  selector: 'list-project',
  templateUrl: '../templates/list-project.component.html'
})

export class ListProjectComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private projectService: ProjectService,
    private toastr: ToastrService,
    private titleService:Title
    ){ 
      this.titleService.setTitle("List Sub Category"); 
    }

  ngOnInit(){
    let self = this;
    let response = this.route.snapshot.data['subcategories']; 
    // if(response){
    //   self.project = response.data;   
    // } 
    // $(function (){
    //   $('#listproject').DataTable({
    //     responsive:true,
    //     "order": []
    //   });
    // });
    // this.setintrval = setInterval(()=>{
    //   this.projectService.getsProject().subscribe(res=>{ 
    //     if(res){ this.project = res.data; }
    //     console.log("Running", this.project ); 
    //     $(function (){
    //       $('#listproject').dataTable({
    //         responsive:true,
    //         destroy: true,
    //         "order": []
    //       });
    //     }); 
    //   }) 
    // }, 3000);  
  } 
  
  // delete1(project_id):void{
  //   var allProject = <any>[];
  //   if(confirm("Do you really want to delete this project")){
  //     this.projectService.deleteProject(project_id)
  //     .subscribe(response => { 
  //       this.toastr.success(response['message'], 'Success');
  //       if(!response['error']){
  //         allProject = this.project;
  //         this.project=allProject.filter(h=> h.id !== project_id);
  //         this.router.navigate(['/sub_category']);
  //       }
  //     });
  //   }
  // }
  // ngOnDestroy() {
  //   clearInterval(this.setintrval); 
  // }
}

