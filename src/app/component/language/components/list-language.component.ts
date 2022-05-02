import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../service/language.service'; 
import { ToastrService } from 'ngx-toastr';
import {Title} from "@angular/platform-browser";

declare var $: any;

@Component({
  selector: 'list-language',
  templateUrl: '../templates/list-language.component.html',
  styleUrls: ['../css/language.component.scss']
})

export class ListLanguageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private languageService: LanguageService,
    private toastr: ToastrService,
    private titleService:Title
    ){ 
      this.titleService.setTitle("List Sub Category"); 
    }

  ngOnInit(){
    let self = this;
    let response = this.route.snapshot.data['subcategories']; 
    // if(response){
    //   self.language = response.data;   
    // } 
    // $(function (){
    //   $('#listlanguage').DataTable({
    //     responsive:true,
    //     "order": []
    //   });
    // });
    // this.setintrval = setInterval(()=>{
    //   this.languageService.getsLanguage().subscribe(res=>{ 
    //     if(res){ this.language = res.data; }
    //     console.log("Running", this.language ); 
    //     $(function (){
    //       $('#listlanguage').dataTable({
    //         responsive:true,
    //         destroy: true,
    //         "order": []
    //       });
    //     }); 
    //   }) 
    // }, 3000);  
  } 
  
  // delete1(language_id):void{
  //   var allLanguage = <any>[];
  //   if(confirm("Do you really want to delete this language")){
  //     this.languageService.deleteLanguage(language_id)
  //     .subscribe(response => { 
  //       this.toastr.success(response['message'], 'Success');
  //       if(!response['error']){
  //         allLanguage = this.language;
  //         this.language=allLanguage.filter(h=> h.id !== language_id);
  //         this.router.navigate(['/sub_category']);
  //       }
  //     });
  //   }
  // }
  // ngOnDestroy() {
  //   clearInterval(this.setintrval); 
  // }
}

