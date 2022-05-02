import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import {Title} from "@angular/platform-browser"; 

@Component({
  selector: 'view-language',
  templateUrl: '../templates/view-language.component.html'
})
export class ViewLanguageComponent implements OnInit {
 
  permissions: any;
  language: any;
  constructor(
    private route: ActivatedRoute,
    private titleService:Title
    ){ 
      this.titleService.setTitle("View Language"); 
    }

  ngOnInit() {
    this.language = this.route.snapshot.data['language'].data;
    // this.permissions = this.route.snapshot.data['language'].permission;   
  }
}