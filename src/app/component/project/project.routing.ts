import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectComponent } from './components/list-project.component';
import { EditProjectComponent} from './components/edit-project.component';
import { AddProjectComponent } from './components/add-project.component'; 
import { ViewProjectComponent } from './components/view-project.component';   
import { ProjectResolve, DetailProjectResolve, ViewProjectResolve } from './service/project.resolve';

const routes: Routes = [
  { path: "", component:ListProjectComponent, resolve: {subcategories: ProjectResolve}},
  { path:"edit/:id", component: EditProjectComponent, resolve:{ project: DetailProjectResolve} },
  { path:"add", component:AddProjectComponent}, 
  { path:"view/:id", component: ViewProjectComponent, resolve:{ project: ViewProjectResolve} }, 
];

@NgModule ({
  imports:[ RouterModule.forChild(routes)],
  exports:[ RouterModule ]
})

export class ProjectRoutingModule {}
