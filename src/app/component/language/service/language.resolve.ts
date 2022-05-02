import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { LanguageService } from './language.service';
// import { ContactService } from '../../contact/service/contact.service';


@Injectable()
export class LanguageResolve implements Resolve<any>{

  constructor(private languageService: LanguageService){}
  resolve(){
    return this.languageService.getLanguages();
  }
}

@Injectable()
export class DetailLanguageResolve implements Resolve<any>{

  constructor(private languageService: LanguageService){}

  resolve(route: ActivatedRouteSnapshot){
    return this.languageService.getLanguage("1");
  }
} 

@Injectable()
export class ViewLanguageResolve implements Resolve<any>{

  constructor(private languageService: LanguageService){}

  resolve(route: ActivatedRouteSnapshot){
    return this.languageService.getLanguageView("1");
  }
}  