import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import {Title} from "@angular/platform-browser"; 

@Component({
  selector: 'view-project',
  templateUrl: '../templates/view-project.component.html'
})
export class ViewProjectComponent implements OnInit {
 
  permissions: any;
  project: any;
  constructor(
    private route: ActivatedRoute,
    private titleService:Title
    ){ 
      this.titleService.setTitle("View Sub Category"); 
    }

  ngOnInit() {
    this.project = this.route.snapshot.data['project'].data;
    // this.permissions = this.route.snapshot.data['project'].permission;   
  }
}