import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './component/profile.component';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule  
  ]
})
export class ProfileModule { }
