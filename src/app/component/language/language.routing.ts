import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLanguageComponent } from './components/list-language.component';
import { EditLanguageComponent} from './components/edit-language.component';
import { AddLanguageComponent } from './components/add-language.component'; 
import { ViewLanguageComponent } from './components/view-language.component';   
import { LanguageResolve, DetailLanguageResolve, ViewLanguageResolve } from './service/language.resolve';

const routes: Routes = [
  { path: "", component:ListLanguageComponent, resolve: {subcategories: LanguageResolve}},
  { path:"edit/:id", component: EditLanguageComponent, resolve:{ language: DetailLanguageResolve} },
  { path:"add", component:AddLanguageComponent}, 
  { path:"view/:id", component: ViewLanguageComponent, resolve:{ language: ViewLanguageResolve} }, 
];

@NgModule ({
  imports:[ RouterModule.forChild(routes)],
  exports:[ RouterModule ]
})

export class LanguageRoutingModule {}
