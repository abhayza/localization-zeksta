import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddLanguageComponent } from './components/add-language.component';
import { ListLanguageComponent } from './components/list-language.component';
import { EditLanguageComponent } from './components/edit-language.component'; 
import { ViewLanguageComponent } from './components/view-language.component'; 
import { LanguageService } from './service/language.service';
import { LanguageResolve, DetailLanguageResolve, ViewLanguageResolve } from './service/language.resolve';
import { LanguageRoutingModule } from './language.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule} from '@angular/material/select';
import { MatIconModule} from '@angular/material/icon';
import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule ({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LanguageRoutingModule, 
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatIconModule,
    MaterialFileInputModule
  ],
  providers:[
    LanguageService, 
    LanguageResolve,
    DetailLanguageResolve,
    ViewLanguageResolve,  
  ],
  declarations:[
    ListLanguageComponent,
    EditLanguageComponent,
    AddLanguageComponent,
    ViewLanguageComponent, 
  ]
})

export class LanguageModule {}
