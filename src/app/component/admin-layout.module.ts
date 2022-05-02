import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

// import { AdminAuthGuard } from './guard/auth.guard'
// import { ChangeProfileService } from '../shared/change-profile.service';
// import { AdminAuthService } from './auth/service/adminauth.service';
// import { AlertModule } from './_alert';
// import { UserVideoModule } from './user_video/uservideo.module';
// import { RePaymentHistoryModule } from './repayment_history/repayment_history.module';
// import { CallLogModule } from './call_logs/calllog.module';
// import { SlugifyPipe } from '../shared/slugify.pipe';
import { AdminRoutingModule } from "./admin-routing.module";
import { TokenInterceptor } from "../default.interceptors";
// import { ProfileResolve } from './profile/service/profile.resolve';
// import { ProfileService } from './profile/service/profile.service';
import { ProjectService } from './project/service/project.service';
import { LoginComponent } from './auth/components/login.component';
import { RegisterComponent } from './auth/components/register.component';
import { HomeComponent } from './home/component/home.component';

// import { LogoutComponent } from './auth/components/logout.component';
// import { ResetPasswordComponent } from './auth/components/resetpassword.component';
// import { ForgotPasswordComponent } from './auth/components/forgotpassword.component';
// import { LayoutComponent } from './layout/layout.component';
// import { HeaderComponent } from './layout/header.component';
// import { ReminderComponent } from './layout/reminder.component';
// import { MenuComponent } from './layout/menu.component';
// import { FooterComponent } from './layout/footer.component';
// import { DashboardComponent } from './dashboard/components/dashboard.component';
// import { PermissionService } from './permissions/service/permission.service';
// import { UservideoService } from './user_video/uservideo.service';
// import { CallLogService } from './call_logs/calllog.service';
// import { CommonService } from '../shared/common.service';
// import { OverDueCheckerModule } from './overdue_checker/overdue_checker.module';
// import { OverDueCheckerService } from './overdue_checker/overdue_checker.service';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'; 

@NgModule({
  declarations: [
    // SlugifyPipe,
    LoginComponent,
    RegisterComponent,
    HomeComponent
    // LogoutComponent,
    // LayoutComponent,
    // HeaderComponent,
    // MenuComponent,
    // FooterComponent,
    // DashboardComponent,
    // ResetPasswordComponent,
    // ForgotPasswordComponent,
    // ReminderComponent
  ],
  providers:[
    // SlugifyPipe,
    // AdminAuthGuard,
    // ChangeProfileService,
    // ProfileResolve,
    // ProfileService,
    // AdminAuthService,
    // PermissionService,
    // UservideoService,
    // OverDueCheckerService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi : true},
    // CommonService,
    // CallLogService
    ProjectService
  ],
  imports: [
    CommonModule,
    // AlertModule,
    // UserVideoModule,
    // CallLogModule,
    // OverDueCheckerModule,
    // RePaymentHistoryModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule
  ],
})
export class AdminLayoutModule { }
