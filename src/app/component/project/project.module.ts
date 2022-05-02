import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProjectComponent } from './components/add-project.component';
import { ListProjectComponent } from './components/list-project.component';
import { EditProjectComponent } from './components/edit-project.component'; 
import { ViewProjectComponent } from './components/view-project.component'; 
import { ProjectService } from './service/project.service';
import { ProjectResolve , DetailProjectResolve, ViewProjectResolve } from './service/project.resolve';
import { ProjectRoutingModule } from './project.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule ({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutingModule, 
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatButtonToggleModule
  ],
  providers:[
    ProjectService, 
    ProjectResolve,
    DetailProjectResolve,
    ViewProjectResolve,  
  ],
  declarations:[
    ListProjectComponent,
    EditProjectComponent,
    AddProjectComponent,
    ViewProjectComponent, 
  ]
})

export class ProjectModule {}
